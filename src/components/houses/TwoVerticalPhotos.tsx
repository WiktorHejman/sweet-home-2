'use client';

import Image from "next/image";
import { useHouseSelector } from "./HouseSelectorProvider";

interface TwoVerticalPhotosProps {
  category: 'verticals' | 'horizontal';
}

export const TwoVerticalPhotos = ({ category }: TwoVerticalPhotosProps) => {
  const { photos } = useHouseSelector();

  if (!photos?.[category]) return null;

  return (
    <section className="max-w-7xl mx-auto space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(photos[category] as string[]).map((photo, index) => (
          <div key={index} className="aspect-[3/4] rounded-3xl overflow-hidden relative">
            <Image
              src={photo}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-3xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
};