'use client'

import Modal from '@/components/Modal';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Gallery() {
  const totalImages = 100;
  const batchSize = 10;
  const [images, setImages] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const [modalImage, setModalImage] = useState<number | null>(null);

  useEffect(() => {
    // Load initial batch of images
    const initialImages = [];
    for (let i = 1; i <= batchSize; i++) {
      initialImages.push(i);
    }
    setImages(initialImages);
  }, []);

  const loadMore = () => {
    const nextImages = [];
    const start = page * batchSize + 1;
    const end = Math.min(start + batchSize - 1, totalImages);
    for (let i = start; i <= end; i++) {
      nextImages.push(i);
    }
    setImages((prev) => [...prev, ...nextImages]);
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && images.length < totalImages) {
        loadMore();
      }
    });
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [images]);

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((imgNum) => (
          <div
            key={imgNum}
            className="cursor-pointer"
            onClick={() => setModalImage(imgNum)}
          >
            <Image
              src={`/gallery/image${imgNum}.jpg`}
              alt={`Gallery Image ${imgNum}`}
              width={300}
              height={200}
              className="rounded"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div ref={loadMoreRef} className="h-10"></div>
      {modalImage && (
        <Modal onClose={() => setModalImage(null)}>
          <Image
            src={`/gallery/image${modalImage}.jpg`}
            alt={`Gallery Image ${modalImage}`}
            width={800}
            height={600}
            className="rounded"
          />
        </Modal>
      )}
    </section>
  );
};
