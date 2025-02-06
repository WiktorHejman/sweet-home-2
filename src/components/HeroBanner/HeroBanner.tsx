import Overlay from "./Overlay";
import StickyImage from "./StickyImage";

type HeroBannerProps = {
  imgUrl: string;
  subheading: string;
  heading: string;
}

export default function HeroBanner({
  imgUrl,
  subheading,
  heading,
}: HeroBannerProps) {
  return (
    <div className="px-4">
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <Overlay heading={heading} subheading={subheading} />
      </div>
    </div>
  );
}