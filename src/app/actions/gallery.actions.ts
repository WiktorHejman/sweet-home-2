"use server";

import { STORAGE } from "@/config/storage";
import { GalleryImage } from "@/types/gallery";
import { supabase } from "@/utils/supabase/supabase";

export async function getGalleryImages(page: number): Promise<{
  images: GalleryImage[];
  hasMore: boolean;
}> {
  try {
    const images: GalleryImage[] = [];
    const start = (page - 1) * STORAGE.BATCH_SIZE;
    let totalCount = 0;

    for (const folder of STORAGE.FOLDERS) {
      const { data: folderImages, error } = await supabase.storage
        .from(STORAGE.BUCKETS.GALLERY)
        .list(folder, {
          limit: STORAGE.BATCH_SIZE,
          offset: start,
          sortBy: { column: "name", order: "asc" },
        });

      if (error || !folderImages) continue;

      const filteredImages = folderImages
        .filter((file) => file.name.match(/\.(jpg|jpeg|png|webp)$/i))
        .map((file) => ({
          id: `${folder}-${file.id}`,
          url: supabase.storage
            .from(STORAGE.BUCKETS.GALLERY)
            .getPublicUrl(`${folder}/${file.name}`).data.publicUrl,
          folder,
        }));

      totalCount += filteredImages.length;
      images.push(...filteredImages);
    }

    return {
      images,
      hasMore: totalCount === STORAGE.BATCH_SIZE,
    };
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return { images: [], hasMore: false };
  }
}
