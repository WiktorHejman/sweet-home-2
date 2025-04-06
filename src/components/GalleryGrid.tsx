'use client'

import { getGalleryImages } from '@/app/actions/gallery.actions';
import { GalleryImage } from '@/types/gallery';
import { shimmer, toBase64 } from '@/utils/shimmer';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Modal from './Modal';

export default function GalleryGrid({ initialImages }: { initialImages: GalleryImage[] }) {
  const [images, setImages] = useState<GalleryImage[]>(initialImages);
  const [modalImage, setModalImage] = useState<GalleryImage | null>(null);
  const [isModalImageLoading, setIsModalImageLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const [columnCount, setColumnCount] = useState(4);

  useEffect(() => {
    setIsModalImageLoading(true);
  }, [modalImage]);

  useEffect(() => {
    const updateColumnCount = () => {
      if (window.innerWidth < 640) {
        setColumnCount(1);
      } else if (window.innerWidth < 768) {
        setColumnCount(2);
      } else if (window.innerWidth < 1024) {
        setColumnCount(3);
      } else {
        setColumnCount(4);
      }
    };

    updateColumnCount();
    window.addEventListener('resize', updateColumnCount);
    return () => window.removeEventListener('resize', updateColumnCount);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setLoading(true);
          const nextPage = page + 1;

          try {
            const result = await getGalleryImages(nextPage);

            setTimeout(() => {
              setImages(prev => [...prev, ...result.images]);
            }, 100);

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

  const getColumnImages = () => {
    const columns: GalleryImage[][] = Array.from({ length: columnCount }, () => []);

    images.forEach((image, index) => {
      const columnIndex = index % columnCount;
      columns[columnIndex].push(image);
    });

    return columns;
  };

  const columns = getColumnImages();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {columns.map((column, columnIndex) => (
          <div key={`column-${columnIndex}`} className="flex flex-col gap-4">
            {column.map((image) => (
              <div
                key={image.id}
                className="cursor-pointer group relative overflow-hidden rounded-2xl animate-fadeIn"
                onClick={() => setModalImage(image)}
              >
                <div className="relative aspect-auto">
                  <Image
                    src={image.url}
                    alt={`${image.folder} gallery image`}
                    width={800}
                    height={800}
                    className="w-full h-auto rounded-2xl transition-all duration-500
                             group-hover:scale-105 object-cover"
                    sizes="(max-width: 640px) 100vw,
                           (max-width: 768px) 50vw,
                           (max-width: 1024px) 33vw,
                           25vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(800, 1200))}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-forest-950/0 to-forest-950/30
                                group-hover:opacity-0 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-forest-950/30 opacity-0
                                group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div ref={loadMoreRef} className="h-20 mt-6">
        {loading && (
          <div className="flex justify-center items-center h-full">
            <div className="w-8 h-8 border-3 border-forest-500 border-t-transparent
                          rounded-full animate-spin" />
          </div>
        )}
      </div>

      {modalImage && (
        <Modal onClose={() => setModalImage(null)}>
          <div className="relative max-w-5xl mx-auto">
            {isModalImageLoading && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-forest-950/50 rounded-2xl">
                <div className="w-12 h-12 border-4 border-forest-300 border-t-transparent
                            rounded-full animate-spin"
                />
              </div>
            )}
            <div className="relative" style={{ maxHeight: '85vh' }}>
              <Image
                src={modalImage.url}
                alt={`${modalImage.folder} gallery image`}
                width={1200}
                height={800}
                className={`rounded-2xl max-h-[85vh] w-auto h-auto transition-opacity duration-300
                       ${isModalImageLoading ? 'opacity-0' : 'opacity-100'}`}
                sizes="90vw"
                onLoad={() => setIsModalImageLoading(false)}
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}