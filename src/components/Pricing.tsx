const PricingSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-neutral-200 mb-12">
        Cennik
      </h2>

      {/* Season Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Low Season Card */}
        <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-neutral-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/30 hover:border-neutral-600/50">
          <h3 className="text-2xl font-semibold text-neutral-200 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Niski sezon
          </h3>
          <p className="text-neutral-400 text-sm mb-6">
            (styczeń-maj i wrzesień-grudzień)
          </p>
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4 transition-colors duration-200 hover:bg-neutral-800/50">
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                <span className="text-neutral-300">PN-CZ</span>
                <strong className="text-xl text-neutral-200 text-right font-medium">525 zł</strong>
                <small className="text-neutral-400 whitespace-nowrap">/doba za 2 osoby</small>
              </div>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4 transition-colors duration-200 hover:bg-neutral-800/50">
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                <span className="text-neutral-300">PT-ND</span>
                <strong className="text-xl text-neutral-200 text-right font-medium">675 zł</strong>
                <small className="text-neutral-400 whitespace-nowrap">/doba za 2 osoby</small>
              </div>
            </div>
          </div>
        </div>

        {/* High Season Card */}
        <div className="bg-neutral-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-neutral-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/30 hover:border-neutral-600/50">
          <h3 className="text-2xl font-semibold text-neutral-200 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Wysoki sezon
          </h3>
          <p className="text-neutral-400 text-sm mb-6">
            (czerwiec-sierpień)
          </p>
          <div className="space-y-4">
            <div className="bg-neutral-900/50 rounded-lg p-4 transition-colors duration-200 hover:bg-neutral-800/50">
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                <span className="text-neutral-300">PN-CZ</span>
                <strong className="text-xl text-neutral-200 text-right font-medium">575 zł</strong>
                <small className="text-neutral-400 whitespace-nowrap">/doba za 2 osoby</small>
              </div>
            </div>
            <div className="bg-neutral-900/50 rounded-lg p-4 transition-colors duration-200 hover:bg-neutral-800/50">
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                <span className="text-neutral-300">PT-ND</span>
                <strong className="text-xl text-neutral-200 text-right font-medium">725 zł</strong>
                <small className="text-neutral-400 whitespace-nowrap">/doba za 2 osoby</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Fees */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-neutral-200 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          Dodatkowe opłaty
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { label: 'Osoba dorosła', price: '150 zł', unit: '/doba' },
            { label: 'Sprzątanie', price: '150 zł', unit: 'jednorazowo' },
            { label: 'Dzieci 2-12 lat', price: '75 zł', unit: '/doba' },
            { label: 'Kaucja zwrotna', price: '500 zł', unit: 'za pobyt' },
            { label: 'Dzieci do lat 2', price: 'bezpłatnie', unit: '' },
          ].map((item, index) => (
            <div key={index}
              className="group bg-neutral-900/50 backdrop-blur-sm rounded-lg p-4 border border-transparent transition-all duration-200 hover:bg-neutral-800/50 hover:border-neutral-700/50">
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4">
                <span className="text-neutral-300 group-hover:text-neutral-200 transition-colors duration-200">{item.label}</span>
                <strong className="text-xl text-neutral-200 text-right font-medium">{item.price}</strong>
                {item.unit && <small className="text-neutral-400 whitespace-nowrap">{item.unit}</small>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Included Amenities */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-neutral-200 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          W cenie pobytu
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="group bg-neutral-900/50 backdrop-blur-sm rounded-lg p-4 border border-transparent transition-all duration-200 hover:bg-neutral-800/50 hover:border-neutral-700/50">
            <div className="flex items-center justify-between">
              <span className="text-neutral-300 font-medium group-hover:text-neutral-200 transition-colors duration-200">Sauna IR</span>
              <small className="text-neutral-400">(2-3 osoby)</small>
            </div>
          </div>
          <div className="group bg-neutral-900/50 backdrop-blur-sm rounded-lg p-4 border border-transparent transition-all duration-200 hover:bg-neutral-800/50 hover:border-neutral-700/50">
            <div className="flex items-center justify-between">
              <span className="text-neutral-300 font-medium group-hover:text-neutral-200 transition-colors duration-200">Balia</span>
              <small className="text-neutral-400">(6-8 osób)</small>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-neutral-400 italic">
        * W święta i długie weekendy mogą obowiązywać inne ceny.
      </p>
    </section>
  );
};

export default PricingSection;