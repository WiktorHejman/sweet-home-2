"use server";

import { GalleryImage } from "@/types/gallery";
import { supabase } from "@/utils/supabase/supabase";

const BUCKET_NAME = "gallery-images";
const FOLDERS = ["dzieciol", "sojka"] as const;
const BATCH_SIZE = 12;

export async function getGalleryImages(page: number): Promise<{
  images: GalleryImage[];
  hasMore: boolean;
}> {
  try {
    const images: GalleryImage[] = [];
    const start = (page - 1) * BATCH_SIZE;
    let totalCount = 0;

    for (const folder of FOLDERS) {
      const { data: folderImages, error } = await supabase.storage
        .from(BUCKET_NAME)
        .list(folder, {
          limit: BATCH_SIZE,
          offset: start,
          sortBy: { column: "name", order: "asc" },
        });

      if (error || !folderImages) continue;

      const filteredImages = folderImages
        .filter((file) => file.name.match(/\.(jpg|jpeg|png|webp)$/i))
        .map((file) => ({
          id: `${folder}-${file.id}`,
          url: supabase.storage
            .from(BUCKET_NAME)
            .getPublicUrl(`${folder}/${file.name}`).data.publicUrl,
          folder,
        }));

      totalCount += filteredImages.length;
      images.push(...filteredImages);
    }

    return {
      images,
      hasMore: totalCount === BATCH_SIZE,
    };
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return { images: [], hasMore: false };
  }
}
