import { KitchenIcon, ShowerIcon } from "@/svg";

interface AmenityGroupProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

const AmenityGroup = ({ title, icon, items }: AmenityGroupProps) => (
  <div className="group relative overflow-hidden rounded-xl p-8 lg:p-10
                  border border-earth-700/50 bg-earth-900/40
                  transition-[background-color] duration-150 ease-in-out hover:bg-earth-900/60">
    <div className="absolute right-6 top-6 w-24 h-24 md:w-56 md:h-56
                    text-forest-400/40 transition-transform duration-500 ease-in-out
                    group-hover:text-forest-400/60 group-hover:scale-110">
      {icon}
    </div>
    <div className="flex flex-col gap-6 relative">
      <h3 className="text-2xl lg:text-3xl font-semibold text-earth-100">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="text-lg text-earth-300/80 flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-forest-500/50" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const Amenities = () => {
  const amenityGroups = [
    {
      title: "Kuchnia",
      icon: <KitchenIcon className="w-full h-full" />,
      items: [
        "Kuchenka indukcyjna",
        "Zmywarka",
        "Piekarnik",
        "Lodówka z zamrażarką",
        "Ekspres przelewowy"
      ]
    },
    {
      title: "Łazienka",
      icon: <ShowerIcon className="w-full h-full" />,
      items: [
        "Prysznic",
        "Pralko-suszarka",
        "Ręczniki",
        "Suszarka do włosów"
      ]
    }
  ];

  return (
    <div className="space-y-10">
      <h2 className="text-4xl font-bold text-earth-50">Wyposażenie</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {amenityGroups.map((group, index) => (
          <AmenityGroup key={index} {...group} />
        ))}
      </div>
    </div>
  );
};