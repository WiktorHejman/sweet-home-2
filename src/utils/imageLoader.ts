import type { ImageLoaderProps } from "next/image";

export default function customImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  return `${src}?w=${width}&q=${quality || 75}&blur=20`;
}
