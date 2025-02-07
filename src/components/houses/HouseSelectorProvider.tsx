'use client';

import { getHousePhotos } from '@/app/actions/houses.actions';
import { House } from '@/types/houses';
import { Photos } from '@/types/photo';
import { HouseSelectorContext } from '@/utils/hooks';
import { ReactNode, useEffect, useState } from 'react';

export default function HouseSelectorProvider({ children }: { children: ReactNode }) {
  const [selectedHouse, setSelectedHouse] = useState<House>('dzieciol');
  const [photos, setPhotos] = useState<Photos | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true);
      try {
        const housePhotos = await getHousePhotos(selectedHouse);
        setPhotos(housePhotos);
      } catch (error) {
        console.error('Failed to fetch photos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPhotos();
  }, [selectedHouse]);

  return (
    <HouseSelectorContext.Provider value={{ selectedHouse, setSelectedHouse, photos, isLoading }}>
      {children}
    </HouseSelectorContext.Provider>
  );
};