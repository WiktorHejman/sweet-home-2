'use client'

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const IMG_PADDING = 12;

export default function StickyImage({ imgUrl }: { imgUrl: string }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-forest-900/80 to-forest-950/90"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};