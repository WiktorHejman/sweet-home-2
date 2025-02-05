import { getGalleryImages } from '@/app/actions/gallery.actions';
import GalleryGrid from '@/components/GalleryGrid';

export default async function Gallery() {
  const { images: initialImages } = await getGalleryImages(1);

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Galeria</h1>
      <GalleryGrid initialImages={initialImages} />
    </section>
  );
}
