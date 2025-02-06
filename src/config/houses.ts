import { HousePhotoConfig } from "@/types";

export const housePhotos: HousePhotoConfig = {
  dzieciol: {
    hero: "02_dzieciol.jpg",
    verticals: ["11_dzieciol.jpg", "16_dzieciol.jpg"],
    // horizontals: ["kitchen.jpg", "house-rules.jpg"],
    horizontalFirst: "04_dzieciol.jpg",
    horizontalSecond: "05_dzieciol.jpg",
  },
  sojka: {
    hero: "19_sojka.jpg",
    verticals: ["01_sojka.jpg", "11_sojka.jpg"],
    // horizontals: ["kitchen.jpg", "house-rules.jpg"],
    horizontalFirst: "18_sojka.jpg",
    horizontalSecond: "03_sojka.jpg",
  },
};

export const housesDetails = {
  dzieciol: {
    title: "Dzięcioł",
    description:
      "Dom Dzięcioł wyróżnia się czerwonymi akcentami kolorystycznymi nawiązując do charakterystycznego czerwonego upierzenia.",
    longDescription:
      "Dom Dzięcioł to wyjątkowe miejsce, gdzie nowoczesny komfort spotyka się z bliskością natury. Położony na skraju Puszczy Białej, oferuje bezpośredni dostęp do leśnych ścieżek – wystarczy zrobić kilka kroków, by znaleźć się wśród drzew. Przestronne wnętrza z panoramicznymi oknami pozwalają podziwiać otaczającą przyrodę, a charakterystyczne czerwone akcenty nawiązują do barw naszego skrzydlatego sąsiada. Dom został zaprojektowany z myślą o wygodnym wypoczynku, łącząc w sobie funkcjonalność z ekologicznymi rozwiązaniami.",
  },
  sojka: {
    title: "Sójka",
    description:
      "Kolory Domu Sójka zostały zainspirowane charakterystycznie niebieskimi i brązowymi piórami naszych sąsiadów.",
    longDescription:
      "Dom Sójka zachwyca swoim harmonijnym połączeniem z otoczeniem, wykorzystując w aranżacji naturalne materiały i kolory inspirowane upierzeniem sójek. Usytuowany na granicy Puszczy Białej, zapewnia idealną bazę do odkrywania leśnych tajemnic. Duże przeszklenia i przemyślany układ pomieszczeń tworzą jasną, przyjazną przestrzeń, gdzie można odpocząć od miejskiego zgiełku. Każdy detal został starannie dobrany, by stworzyć atmosferę sprzyjającą relaksowi i kontemplacji natury.",
  },
};
