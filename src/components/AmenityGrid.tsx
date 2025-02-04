import { DogIcon, MoneyIcon, PeopleIcon, SaunaIcon, TimeIcon } from "@/svg";

const AmenityGrid = () => {
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
      title: "Elastyczny czas pobytu",
      description: (
        <>
          Minimalny czas najmu:<br />
          1 doba w tygodniu<br />
          2 doby w weekend
        </>
      )
    },
    {
      isDecorative: true
    },
    {
      icon: <DogIcon className="w-12 h-12 text-current" />,
      title: "Przyjazne zwierzętom",
      description: "Darmowy pobyt dla czworonogów"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {amenities.map((amenity, index) => (
          amenity.isDecorative ? (
            <div
              key={index}
              className="p-6 rounded-3xl border border-neutral-800 bg-neutral-900/50 hidden lg:block"
            >
              <div className="h-full w-full flex items-center justify-center">
                <div className="w-12 h-0.5 bg-neutral-700 rotate-45"></div>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="group p-6 rounded-3xl border border-forest-800/50 hover:border-forest-600/50 
                         bg-forest-900/10 hover:bg-forest-800/20
                         transition-all duration-300 backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="text-forest-400 group-hover:text-forest-300 transition-colors duration-300">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-medium text-earth-100">
                  {amenity.title}
                </h3>
                <p className="text-earth-300 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default AmenityGrid;