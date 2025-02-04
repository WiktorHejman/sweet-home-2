import Image from "next/image";

interface PhotoWithDescriptionProps {
  src: string;
  alt: string;
  description: string;
  orientation: 'left' | 'right';
}

const PhotoWithDescription = ({ src, alt, description, orientation }: PhotoWithDescriptionProps) => {
  return (
    <div className="max-w-7xl mx-auto space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={`relative w-full aspect-[4/5] ${orientation === 'left' ? 'order-2' : ''}`}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover rounded-3xl"
          />
        </div>

        <div className="w-full aspect-[4/5] flex items-center">
          <p className="text-xl text-neutral-200 md:text-2xl font-light leading-relaxed tracking-wide border-2 border-white rounded-3xl p-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PhotoWithDescription