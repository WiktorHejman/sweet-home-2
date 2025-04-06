export default function AboutUs() {
  return (
    <div className="mx-auto grid grid-cols-1 gap-8 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-2xl sm:text-3xl font-bold md:col-span-4 border-2 border-forest-500/30 rounded-3xl p-6 bg-forest-900/20 backdrop-blur-sm text-earth-100">
        Oaza spokoju blisko natury – Lasownia, dwa wyjątkowe domy na wynajem, stworzone z myślą o odpoczynku i relaksie.
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-lg sm:text-xl md:text-2xl text-earth-100">
          Lasownia to miejsce stworzone z miłości do otaczającej przyrody. Dwa komfortowe domy – Sójka i Dzięcioł – powstały, by umożliwić relaks wśród natury, z dala od miejskiego zgiełku. Każdy z nich wyposażony jest w saunę oraz balię opalaną drewnem, oferując idealne warunki do odpoczynku.
        </p>
        <p className="mb-8 text-lg sm:text-xl md:text-2xl text-earth-100">
          Położone zaledwie 30 km od Warszawy, domy pozwalają na szybki dojazd i przeniesienie się w świat, gdzie czas płynie wolniej. Zapraszamy pary, rodziny oraz grupy przyjaciół wraz z pupilami, by cieszyć się spokojem i pięknem natury.
        </p>
      </div>
      <div className="col-span-1 md:col-span-12">
        <p className="text-xl sm:text-2xl md:text-3xl text-earth-100 italic">
          Dołącz do grona naszych gości i odkryj Lasownię – miejsce stworzone dla tych, którzy pragną harmonii i wytchnienia w otoczeniu lasu.
        </p>
      </div>
    </div>
  );
};
