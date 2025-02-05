import { getGalleryImages } from '@/app/actions/gallery.actions';
import GalleryGrid from '@/components/GalleryGrid';

export default async function Gallery() {
  const { images: initialImages } = await getGalleryImages(1);

  return (
    <section className="max-w-7xl mx-auto p-6">
      <GalleryGrid initialImages={initialImages} />
    </section>
  );
}
