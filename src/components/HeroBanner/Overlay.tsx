'use client'

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type OverlayProps = {
  subheading: string;
  heading: string;
}

export default function Overlay({
  subheading,
  heading,
}: OverlayProps) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white px-4"
    >
      <p className="mb-2 text-center text-lg sm:text-xl md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-3xl sm:text-5xl md:text-7xl font-bold">{heading}</p>
    </motion.div>
  );
};