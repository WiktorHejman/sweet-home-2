import Image from "next/image";

interface PhotoWithDescriptionProps {
  src: string;
  alt: string;
  description: string;
  orientation: 'left' | 'right';
}

export default function PhotoWithDescription({ src, alt, description, orientation }: PhotoWithDescriptionProps) {
  return (
    <div className="max-w-7xl mx-auto space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className={`relative w-full aspect-[4/5] ${orientation === 'left' ? 'order-2' : ''}`}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-3xl"
          />
        </div>

        <div className="w-full aspect-[4/5] flex items-center">
          <p className="text-lg md:text-xl text-earth-100 font-light leading-relaxed tracking-wide
                        border-2 border-forest-500/30 rounded-3xl p-4 sm:p-6
                        bg-forest-900/20 backdrop-blur-sm
                        shadow-lg shadow-forest-900/10">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
