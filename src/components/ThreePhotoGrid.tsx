import Image from 'next/image';

interface ThreePhotoGridProps {
  mainPhoto: {
    src: string;
    alt: string;
  };
  bottomLeftPhoto: {
    src: string;
    alt: string;
  };
  bottomRightPhoto: {
    src: string;
    alt: string;
  };
}

export default function ThreePhotoGrid({ mainPhoto, bottomLeftPhoto, bottomRightPhoto }: ThreePhotoGridProps) {
  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={mainPhoto.src}
          alt={mainPhoto.alt}
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover rounded-3xl"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative w-full aspect-[4/5]">
          <Image
            src={bottomLeftPhoto.src}
            alt={bottomLeftPhoto.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-3xl"
          />
        </div>

        <div className="relative w-full aspect-[4/5]">
          <Image
            src={bottomRightPhoto.src}
            alt={bottomRightPhoto.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};
