'use client';

import { useHouseSelector } from "@/utils/hooks";
import { shimmer, toBase64 } from "@/utils/shimmer";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

interface HorizontalPhotoProps {
  category: 'hero' | 'horizontalFirst' | 'horizontalSecond';
}

export default function HorizontalPhoto({ category }: HorizontalPhotoProps) {
  const { photos, isLoading } = useHouseSelector();

  if (!photos?.[category]) return null;

  return (
    <section className="max-w-7xl mx-auto space-y-16">
      <div className="aspect-[16/9] rounded-3xl overflow-hidden relative">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-forest-950/80 to-forest-900/80 backdrop-blur-sm"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 w-12 h-12 border-4 border-forest-500/20 rounded-full" />
                  <div className="w-12 h-12 border-4 border-forest-500 border-t-transparent rounded-full animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-forest-500 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 0.2, 0.1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-forest-500/5"
              />
            </motion.div>
          ) : (
            <motion.div
              key="image"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-full"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};