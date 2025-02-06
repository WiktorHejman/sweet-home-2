import { Amenities, HorizontalPhoto, HouseFeatures, HouseRules, HouseSelector, HouseSelectorProvider, SleepingArrangements, TwoVerticalPhotos } from '@/components/houses';
import { housesDetails } from '@/config';

// export const metadata: Metadata = {
//   title: 'Lasownia - Komfortowe domy w sercu Puszczy Białej',
//   description: 'Odkryj nasze dwa wyjątkowe domy - Sójka i Dzięcioł. Każdy wyposażony w saunę, balię i wszystkie udogodnienia potrzebne do komfortowego wypoczynku w otoczeniu natury.',
//   openGraph: {
//     type: 'website',
//     locale: 'pl_PL',
//     url: 'https://lasownia.pl/domki',
//     siteName: 'Lasownia',
//     title: 'Lasownia - Komfortowe domy w sercu Puszczy Białej',
//     description: 'Odkryj nasze dwa wyjątkowe domy - Sójka i Dzięcioł. Każdy wyposażony w saunę, balię i wszystkie udogodnienia potrzebne do komfortowego wypoczynku w otoczeniu natury.',
//     images: [
//       {
//         url: '/og-image.jpg', // This should be an absolute URL in production
//         width: 1200,
//         height: 630,
//         alt: 'Lasownia - widok na domy Sójka i Dzięcioł w otoczeniu Puszczy Białej',
//       }
//     ],
//   },
// };

export default function Houses() {
  return (
    <HouseSelectorProvider>
      <section className="max-w-7xl mx-auto p-6 space-y-16">
        <HorizontalPhoto category="hero" />
        <HouseSelector houses={housesDetails} />
        <HouseFeatures />
        <TwoVerticalPhotos category="verticals" />
        <SleepingArrangements />
        <HorizontalPhoto category="horizontal" />
        <Amenities />
        <HouseRules />
      </section>
    </HouseSelectorProvider>
  );
}