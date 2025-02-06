import { DoubleBedIcon, SingleBedIcon, SofaIcon } from "@/svg";

const ArrangementCard = ({ title, description, capacity, icon }: {
  title: string;
  description: string;
  capacity: string;
  icon: React.ReactNode;
}) => (
  <div className="group relative overflow-hidden rounded-xl p-8 lg:p-10
                  border border-earth-700/50 bg-earth-900/40
                  transition-[background-color] duration-150 ease-in-out hover:bg-earth-900/60">
    <div className="absolute right-6 top-6 w-24 h-24
                    text-forest-400/40 transition-transform duration-500 ease-in-out
                    group-hover:text-forest-400/60 group-hover:scale-110">
      {icon}
    </div>
    <div className="relative flex flex-col gap-6 h-full">
      <h3 className="text-2xl lg:text-3xl font-semibold text-earth-100">{title}</h3>
      <div className="text-lg text-earth-300/80 space-y-4 h-full flex flex-col justify-between">
        <p>{description}</p>
        <p className="text-forest-400">{capacity}</p>
      </div>
    </div>
  </div>
);

export const SleepingArrangements = () => {
  const arrangements = [
    {
      title: "Antresola",
      description: "Duże małżeńskie łóżko z panoramicznym widokiem na Puszczę",
      capacity: "2 osoby",
      icon: <DoubleBedIcon className="w-full h-full" />
    },
    {
      title: "Sypialnia na piętrze",
      description: "Podwójne łóżko lub dwa pojedyncze, biurko do pracy",
      capacity: "2 osoby",
      icon: <SingleBedIcon className="w-full h-full" />
    },
    {
      title: "Salon",
      description: "Duża, rozkładana kanapa",
      capacity: "2 osoby",
      icon: <SofaIcon className="w-full h-full" />
    }
  ];

  return (
    <div className="space-y-10">
      <h2 className="text-4xl font-bold text-earth-50">Gdzie będziecie spać?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {arrangements.map((arr, index) => (
          <ArrangementCard key={index} {...arr} />
        ))}
      </div>
    </div>
  );
};