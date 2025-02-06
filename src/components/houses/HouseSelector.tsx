'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';

interface House {
  title: string;
  description: string;
  longDescription: string;
  images: string[];
}

interface HouseSelectorProps {
  houses: Record<string, House>;
  initialHouse?: 'dzieciol' | 'sojka';
}

export const HouseSelector = ({ houses, initialHouse = 'dzieciol' }: HouseSelectorProps) => {
  const [activeHouse, setActiveHouse] = useState<'dzieciol' | 'sojka'>(initialHouse);
  const house = houses[activeHouse];

  return (
    <>
      <div className="flex gap-4">
        {/* House selector buttons */}
        {Object.entries(houses).map(([key, house]) => (
          <button
            key={key}
            onClick={() => setActiveHouse(key as 'dzieciol' | 'sojka')}
            className={`flex-1 p-8 rounded-3xl border transition-all duration-300
                     ${activeHouse === key
                ? 'border-forest-500/50 bg-forest-900/30'
                : 'border-forest-800/30 bg-forest-900/10 hover:bg-forest-900/20'}`}
          >
            <h2 className="text-2xl font-bold text-earth-50 mb-2">{house.title}</h2>
            <p className="text-earth-300">{house.description}</p>
          </button>
        ))}
      </div>

      <motion.div
        key={activeHouse}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-16"
      >
        {/* Content sections */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-earth-50">{house.title}</h1>
          <p className="text-xl text-earth-300/80 max-w-3xl">{house.longDescription}</p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ... rest of the image gallery code ... */}
        </div>
      </motion.div>
    </>
  );
}; 