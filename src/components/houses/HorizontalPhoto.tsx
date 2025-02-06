'use client';

import Image from "next/image";
import { useHouseSelector } from "./HouseSelectorProvider";

interface HorizontalPhotoProps {
  category: 'hero' | 'horizontal';
}

export const HorizontalPhoto = ({ category }: HorizontalPhotoProps) => {
  const { photos } = useHouseSelector();

  if (!photos?.[category]) return null;

  return (
    <section className="max-w-7xl mx-auto space-y-16">
      <div className="aspect-[16/9] rounded-3xl overflow-hidden relative">
        <Image
          src={photos[category]}
          alt=""
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover rounded-3xl"
          fill
        />
      </div>
    </section>
  );
};