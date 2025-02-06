'use client'

import { House } from '@/types/houses';
import { motion } from 'framer-motion';
import { useHouseSelector } from './HouseSelectorProvider';

interface HouseSelectorProps {
  houses: Record<string, {
    title: string;
    description: string;
    longDescription: string;
  }>;
}

export const HouseSelector = ({ houses }: HouseSelectorProps) => {
  const { selectedHouse, setSelectedHouse } = useHouseSelector();
  const house = houses[selectedHouse];

  return (
    <>
      <div className="flex gap-4">
        {Object.entries(houses).map(([key, house]) => (
          <button
            key={key}
            onClick={() => setSelectedHouse(key as House)}
            className={`flex-1 p-8 rounded-3xl border transition-all duration-300
                     ${selectedHouse === key
                ? 'border-forest-500/50 bg-forest-900/30'
                : 'border-forest-800/30 bg-forest-900/10 hover:bg-forest-900/20'}`}
          >
            <h2 className="text-2xl font-bold text-earth-50 mb-2">{house.title}</h2>
            <p className="text-earth-300">{house.description}</p>
          </button>
        ))}
      </div>

      <motion.div
        key={selectedHouse}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-16"
      >
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-earth-50">{house.title}</h1>
          <p className="text-xl text-earth-300/80">{house.longDescription}</p>
        </div>
      </motion.div>
    </>
  );
};