import { housePhotos } from "@/config/houses";
import { STORAGE } from "@/config/storage";
import { House } from "@/types/houses";
import { Photos } from "@/types/photo";
import { supabase } from "@/utils/supabase/supabase";

export async function getHousePhotos(house: House) {
  try {
    const houseConfig = housePhotos[house];
    const result: Partial<Photos> = {};

    for (const [category, photoConfig] of Object.entries(houseConfig)) {
      if (Array.isArray(photoConfig)) {
        const urls = await Promise.all(
          photoConfig.map(async (path) => {
            const {
              data: { publicUrl },
            } = await supabase.storage
              .from(`${STORAGE.BUCKETS.GALLERY}/${house}`)
              .getPublicUrl(path);
            return publicUrl;
          })
        );
        (result[category as keyof Photos] as string[]) = urls;
      } else {
        const {
          data: { publicUrl },
        } = await supabase.storage
          .from(`${STORAGE.BUCKETS.GALLERY}/${house}`)
          .getPublicUrl(photoConfig);
        (result[category as keyof Photos] as string) = publicUrl;
      }
    }

    return result as Photos;
  } catch (error) {
    console.error(`Error fetching photos for house ${house}:`, error);
    throw new Error(`Failed to fetch photos for ${house}`);
  }
}
