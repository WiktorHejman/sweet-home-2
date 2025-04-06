'use client'

import { House } from '@/types/houses';
import { useHouseSelector } from '@/utils/hooks';
import { motion } from 'motion/react';

interface HouseSelectorProps {
  houses: Record<string, {
    title: string;
    description: string;
    longDescription: string;
  }>;
}

export default function HouseSelector({ houses }: HouseSelectorProps) {
  const { selectedHouse, setSelectedHouse } = useHouseSelector();
  const house = houses[selectedHouse];

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4">
        {Object.entries(houses).map(([key, house]) => (
          <button
            key={key}
            className={`flex-1 p-6 sm:p-8 rounded-3xl border transition-all duration-300
              ${selectedHouse === key
                ? 'border-forest-500/50 bg-forest-900/30'
                : 'border-forest-800/30 bg-forest-900/10 hover:bg-forest-900/20'}`}
            onClick={() => setSelectedHouse(key as House)}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-earth-50 mb-2">{house.title}</h2>
            <p className="text-base sm:text-lg text-earth-300">{house.description}</p>
          </button>
        ))}
      </div>

      <motion.div
        key={selectedHouse}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-8 sm:space-y-16"
      >
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-earth-50
                       tracking-tight leading-tight">{house.title}</h1>
          <p className="text-lg sm:text-xl text-earth-300/80
                      leading-relaxed">{house.longDescription}</p>
        </div>
      </motion.div>
    </>
  );
};