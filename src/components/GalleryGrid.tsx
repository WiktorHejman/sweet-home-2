'use client'

import { getGalleryImages } from '@/app/actions/gallery.actions';
import { GalleryImage } from '@/types/gallery';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Modal from './Modal';

export default function GalleryGrid({ initialImages }: { initialImages: GalleryImage[] }) {
  const [images, setImages] = useState<GalleryImage[]>(initialImages);
  const [modalImage, setModalImage] = useState<GalleryImage | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setLoading(true);
          const nextPage = page + 1;

          try {
            const result = await getGalleryImages(nextPage);
            setImages(prev => [...prev, ...result.images]);
            setHasMore(result.hasMore);
            setPage(nextPage);
          } catch (error) {
            console.error('Error loading more images:', error);
          } finally {
            setLoading(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => observer.disconnect();
  }, [page, hasMore, loading]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {images.map((image) => (
          <div
            key={image.id}
            className="cursor-pointer group relative overflow-hidden rounded-2xl"
            onClick={() => setModalImage(image)}
          >
            <Image
              src={image.url}
              alt={`${image.folder} gallery image`}
              width={300}
              height={200}
              className="rounded-2xl transition-transform duration-500 group-hover:scale-105 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-forest-900/20 group-hover:bg-forest-900/0 transition-all duration-300" />
          </div>
        ))}
      </div>

      <div ref={loadMoreRef} className="h-10 mt-6">
        {loading && (
          <div className="flex justify-center">
            <div className="w-6 h-6 border-2 border-forest-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      {modalImage && (
        <Modal onClose={() => setModalImage(null)}>
          <Image
            src={modalImage.url}
            alt={`${modalImage.folder} gallery image`}
            width={800}
            height={600}
            className="rounded object-contain"
          />
        </Modal>
      )}
    </>
  );
}