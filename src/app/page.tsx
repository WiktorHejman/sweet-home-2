import AboutUs from "@/components/AboutUs";
import AmenityGrid from "@/components/AmenityGrid";
import PhotoWithDescription from "@/components/PhotoWithDescription";
import Pricing from "@/components/Pricing";
import Separator from "@/components/Separator";
import { TextParallaxContentExample } from "@/components/TextParallaxContent";
import ThreePhotoGrid from "@/components/ThreePhotoGrid";

export default function Home() {
  return (
    <>
      <TextParallaxContentExample />

      <AboutUs />

      <ThreePhotoGrid
        mainPhoto={{
          src: "/06_dzieciol.jpg",
          alt: "Main landscape photo"
        }}
        bottomLeftPhoto={{
          src: "/01_dzieciol.jpg",
          alt: "Bottom left photo"
        }}
        bottomRightPhoto={{
          src: "/10_sojka.jpg",
          alt: "Bottom right photo"
        }}
      />

      <div className="max-w-3xl mx-auto mt-20">
        <Separator />
      </div>

      <section className="max-w-7xl mx-auto p-4">
        <p className="my-4 text-center text-xl text-neutral-200 md:text-2xl">
          Domy oferowane do wynajęcia są identyczne pod względem układu pomieszczeń, funkcjonalności oraz wyposażenia, jednak różnią się kolorystyką, detalami mebli i dekoracjami, które nadają im niepowtarzalny charakter. Każdy z nich zapewnia komfortowy pobyt i bliskość natury, tworząc idealne warunki do odpoczynku z dala od miejskiego zgiełku. Wybierz dom, który najlepiej odpowiada Twoim preferencjom – czy to subtelna elegancja Sójki, czy ciepłe, wyraziste akcenty Dzięcioła. Bez względu na wybór, czeka na Ciebie miejsce pełne harmonii, relaksu i bliskości z przyrodą.
        </p>
      </section>

      <div className="max-w-3xl mx-auto mb-20">
        <Separator />
      </div>

      <div className="mb-20">
        <PhotoWithDescription
          src="/01_dzieciol_salon.jpg"
          alt="Dzięcioł"
          description="Dzięcioł wyróżnia się czerwonymi akcentami, inspirowanymi barwami charakterystycznego upierzenia jego ptasiego imiennika. To dom dla tych, którzy cenią ciepłe, wyraziste detale i bliskość natury. Położony na skraju Puszczy Białej, pozwala rozpocząć leśne spacery tuż po wyjściu za drzwi. Przestronne wnętrze, naturalne materiały i duże przeszklenia sprawiają, że goście mogą cieszyć się pięknem otaczającej przyrody o każdej porze roku. Dzięcioł oferuje wszystkie niezbędne udogodnienia, zapewniając wygodny wypoczynek zarówno dla par, rodzin, jak i grupy przyjaciół. To idealne miejsce, by zatrzymać się na chwilę, oderwać od codzienności i zanurzyć w kojącej atmosferze lasu."
          orientation="left"
        />

        <PhotoWithDescription
          src="/17_sojka.jpg"
          alt="Sójka"
          description="Sójka to dom pełen harmonii, inspirowany niebiesko-brązowym upierzeniem swojego skrzydlatego sąsiada. Jego stonowana kolorystyka i przytulne wnętrze tworzą atmosferę idealną do relaksu. Położony tuż przy granicy Puszczy Białej, pozwala cieszyć się leśnymi ścieżkami bez konieczności dojazdu – wystarczy wyjść na zewnątrz i zrobić kilka kroków. Duże okna wpuszczają mnóstwo naturalnego światła, podkreślając bliskość otaczającej przyrody i sprzyjając wyciszeniu. Sójka, podobnie jak Dzięcioł, zapewnia pełen komfort, łącząc nowoczesne udogodnienia z naturalnym urokiem okolicy. To doskonały wybór dla każdego, kto szuka równowagi, spokoju i regeneracji w sercu natury."
          orientation="right"
        />
      </div>

      <section className="max-w-7xl mx-auto mb-20 px-4">
        <AmenityGrid />
      </section>

      <section className="max-w-7xl mx-auto mb-20 px-4">
        <Pricing />
      </section>
    </>
  );
}
