'use client';

import { useHouseSelector } from "@/utils/hooks";
import { shimmer, toBase64 } from "@/utils/shimmer";
import Image from "next/image";

interface HorizontalPhotoProps {
  category: 'hero' | 'horizontalFirst' | 'horizontalSecond';
}

export default function HorizontalPhoto({ category }: HorizontalPhotoProps) {
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
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 1080))}`}
          priority={category === "hero"}
        />
      </div>
    </section>
  );
};