'use client';

import { getHousePhotos } from '@/app/actions/houses.actions';
import { House } from '@/types/houses';
import { Photos } from '@/types/photo';
import { createContext, useContext, useEffect, useState } from 'react';

interface HouseSelectorContextType {
  selectedHouse: House;
  setSelectedHouse: (house: House) => void;
  photos: Photos | null;
}

const HouseSelectorContext = createContext<HouseSelectorContextType | null>(null);

export const useHouseSelector = () => {
  const context = useContext(HouseSelectorContext);
  if (!context) {
    throw new Error('useHouseSelector must be used within HouseSelectorProvider');
  }
  return context;
};

export const HouseSelectorProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedHouse, setSelectedHouse] = useState<House>('dzieciol');
  const [photos, setPhotos] = useState<Photos | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const housePhotos = await getHousePhotos(selectedHouse);
        setPhotos(housePhotos);
      } catch (error) {
        console.error('Failed to fetch photos:', error);
      }
    };

    fetchPhotos();
  }, [selectedHouse]);

  return (
    <HouseSelectorContext.Provider value={{ selectedHouse, setSelectedHouse, photos }}>
      {children}
    </HouseSelectorContext.Provider>
  );
};