import { AirConditionIcon, CampfireIcon, CoffeeIcon, InfraRedIcon, ParkingIcon, TvIcon, WifiIcon } from "@/svg";
import { HotTubIcon } from "@/svg/HotTubIcon";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="group relative overflow-hidden rounded-xl p-8 lg:p-10
                  border border-earth-700/50 bg-earth-900/40
                  transition-[background-color] duration-150 ease-in-out hover:bg-earth-900/60">
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-6 mb-6">
        <div className="relative w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center
                      text-forest-400/40 transition-all duration-500 ease-in-out
                      group-hover:text-forest-400/60">
          <div className="w-12 h-12 lg:w-16 lg:h-16">
            {icon}
          </div>
        </div>
        <h3 className="text-xl lg:text-2xl font-semibold text-earth-100">
          {title}
        </h3>
      </div>

      <p className="text-lg text-earth-300/80
                    transition-all duration-500 ease-in-out
                    group-hover:text-earth-300">
        {description}
      </p>
    </div>
  </div>
);

export const HouseFeatures = () => {
  const features = [
    {
      icon: <InfraRedIcon className="w-full h-full" />,
      title: "Sauna InfraRed",
      description: "Prywatna sauna dla 2-3 osób"
    },
    {
      icon: <HotTubIcon className="w-full h-full" />,
      title: "Balia",
      description: "Opalana drewnem z aero- i hydro-masażem dla 6-8 osób"
    },
    {
      icon: <CampfireIcon className="w-full h-full" />,
      title: "Miejsce na ognisko",
      description: "Przestrzeń do wieczornego relaksu w ogrodzie"
    },
    {
      icon: <WifiIcon className="w-full h-full" />,
      title: "Szybki internet",
      description: "Światłowodowe łącze dla pracy i rozrywki"
    },
    {
      icon: <TvIcon className="w-full h-full" />,
      title: "Telewizor",
      description: "Smart TV z dostępem do platform streamingowych"
    },
    {
      icon: <AirConditionIcon className="w-full h-full" />,
      title: "Komfort termiczny",
      description: "Ogrzewanie podłogowe i klimatyzacja"
    },
    {
      icon: <CoffeeIcon className="w-full h-full" />,
      title: "Kawa",
      description: "Z zaprzyjaźnionej palarni"
    },
    {
      icon: <ParkingIcon className="w-full h-full" />,
      title: "Parking",
      description: "Bezpłatny parking na terenie posesji"
    },
  ];

  return (
    <div className="space-y-10">
      <h2 className="text-4xl font-bold text-earth-50">Udogodnienia</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};