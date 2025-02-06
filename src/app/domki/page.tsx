import { Amenities, HouseFeatures, HouseRules, HouseSelector, SleepingArrangements } from '@/components/houses';

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

const houses = {
  dzieciol: {
    title: "Dzięcioł",
    description: "Dom Dzięcioł wyróżnia się czerwonymi akcentami kolorystycznymi nawiązując do charakterystycznego czerwonego upierzenia.",
    longDescription: "Dom znajduje się na samym skraju Puszczy Białej, zatem na spacery można wybrać się bez wsiadania do samochodu. Wystarczy założyć buty i po kilku krokach znajdziecie się w lesie. Dzięcioł oferuje doskonały widok na malownicze otoczenie, a jednocześnie zapewnia wszystkie niezbędne udogodnienia dla komfortowego pobytu.",
    images: [
      "/01_dzieciol.jpg",
      "/02_dzieciol.jpg",
      "/03_dzieciol.jpg",
    ]
  },
  sojka: {
    title: "Sójka",
    description: "Kolory Domu Sójka zostały zainspirowane charakterystycznie niebieskimi i brązowymi piórami naszych sąsiadów.",
    longDescription: "Dom znajduje się na samym skraju Puszczy Białej, zatem na spacery można wybrać się bez wsiadania do samochodu. Wystarczy założyć buty i po kilku krokach znajdziecie się w lesie. Sójka oferuje doskonały widok na malownicze otoczenie, a jednocześnie zapewnia wszystkie niezbędne udogodnienia dla komfortowego pobytu.",
    images: [
      "/01_sojka.jpg",
      "/02_sojka.jpg",
      "/03_sojka.jpg",
    ]
  }
};

export default function Houses() {
  return (
    <section className="max-w-7xl mx-auto p-6 space-y-16">
      <HouseSelector houses={houses} />
      <HouseFeatures />
      <SleepingArrangements />
      <Amenities />
      <HouseRules />
    </section>
  );
}