'use client';

import { getHousePhotos } from '@/app/actions/houses.actions';
import { House } from '@/types/houses';
import { Photos } from '@/types/photo';
import { HouseSelectorContext } from '@/utils/hooks';
import { ReactNode, useEffect, useState } from 'react';

export default function HouseSelectorProvider({ children }: { children: ReactNode }) {
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