import { DogIcon, MoneyIcon, PeopleIcon, SaunaIcon, TimeIcon } from "@/svg";

const amenities = [
  {
    icon: <SaunaIcon className="w-12 h-12 text-current" />,
    title: "Prywatna strefa relaksu",
    description: "Sauna i balia na wyłączność w każdym domu"
  },
  {
    icon: <PeopleIcon className="w-12 h-12 text-current" />,
    title: "Komfortowa przestrzeń",
    description: "Do 6 osób (8 po uzgodnieniu)"
  },
  {
    icon: <MoneyIcon className="w-12 h-12 text-current" />,
    title: "Przyjazne dzieciom",
    description: (
      <>
        Dzieci do lat 2 bezpłatnie<br />
        Dzieci 2-12 lat 50% rabatu
      </>
    )
  },
  {
    icon: <TimeIcon className="w-12 h-12 text-current" />,
    title: "Niski sezon",
    description: (
      <>
        Minimalny czas pobytu:<br />
        1 doba w tygodniu<br />
        2 doby w weekend<br />
      </>
    )
  },
  {
    icon: <TimeIcon className="w-12 h-12 text-current" />,
    title: "Wysoki sezon",
    description: (
      <>
        Minimalny czas pobytu:<br />
        2 doby
      </>
    )
  },
  {
    icon: <DogIcon className="w-12 h-12 text-current" />,
    title: "Przyjazne zwierzętom",
    description: "Darmowy pobyt dla czworonogów"
  },
  {
    isDecorative: true
  }
];

export default function AmenityGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {amenities.map((amenity, index) => (
        amenity.isDecorative ? (
          <div
            key={index}
            className="p-8 rounded-3xl border border-forest-800/50 bg-forest-900/20 hidden lg:block"
          >
            <div className="h-full w-full flex items-center justify-center">
              <div className="w-16 h-0.5 bg-forest-700/50 rotate-45"></div>
            </div>
          </div>
        ) : (
          <div
            key={index}
            className="group p-8 rounded-3xl border border-forest-800/50 hover:border-forest-600/50 
                         bg-forest-900/10 hover:bg-forest-800/20
                         transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex gap-6">
              <div className="text-forest-400 group-hover:text-forest-300 transition-colors duration-300 shrink-0">
                {amenity.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-earth-100 font-lora">
                  {amenity.title}
                </h3>
                <p className="text-earth-300 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          </div>
        )
      ))}
    </div>
  );
};
