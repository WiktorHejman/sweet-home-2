import { DogIcon, MoneyIcon, PeopleIcon, TimeIcon } from "@/svg";

const RuleSection = ({
  title,
  icon,
  children
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode
}) => (
  <div className="group relative overflow-hidden rounded-xl p-8 lg:p-10
                  border border-earth-700/50 bg-earth-900/40
                  transition-[background-color] duration-150 ease-in-out hover:bg-earth-900/60">
    <div className="absolute right-6 top-6 w-24 h-24
                    text-forest-400/40 transition-transform duration-500 ease-in-out 
                    group-hover:text-forest-400/60 group-hover:scale-110">
      {icon}
    </div>
    <div className="relative flex flex-col gap-6">
      <h3 className="text-2xl lg:text-3xl font-semibold text-earth-100">{title}</h3>
      <div className="text-lg text-earth-300/80 space-y-4">
        {children}
      </div>
    </div>
  </div>
);

export const HouseRules = () => {
  return (
    <div className="space-y-10">
      <h2 className="text-4xl font-bold text-earth-50">Ogólne zasady</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <RuleSection title="Godziny" icon={<TimeIcon className="w-full h-full" />}>
          <p>Przyjazd od godziny 16:00</p>
          <p>Wyjazd do godziny 12:00</p>
        </RuleSection>

        <RuleSection title="Goście" icon={<PeopleIcon className="w-full h-full" />}>
          <p>Maksymalna liczba gości: 6 osób (8 po uzgodnieniu)</p>
          <p>Maluchy do 2 lat bezpłatnie</p>
          <p>Dzieci 2-12 lat - 50% rabatu</p>
        </RuleSection>

        <RuleSection title="Płatności" icon={<MoneyIcon className="w-full h-full" />}>
          <div className="space-y-4">
            <p>Rezerwacje złożone:</p>
            <ul className="list-disc ml-8 space-y-2">
              <li>powyżej 30 dni przed przyjazdem: opłata rezerwacyjna 30%</li>
              <li>30-7 dni przed przyjazdem: opłata rezerwacyjna 50%</li>
              <li>poniżej 7 dni przed przyjazdem: płatność 100%</li>
            </ul>
            <p>Pełna płatność: 7 dni przed przyjazdem</p>
            <p>Wystawiamy faktury VAT</p>
          </div>
        </RuleSection>

        <RuleSection title="Dodatkowe informacje" icon={<DogIcon className="w-full h-full" />}>
          <p>Korzystanie z sauny w cenie pobytu</p>
          <p>Korzystanie z balii w cenie pobytu</p>
          <p>Czworonogi mile widziane - bezpłatnie</p>
          <p>Teren wokół domu jest ogrodzony</p>
        </RuleSection>
      </div>
    </div>
  );
};