import { House } from "@/types/houses";
import { Photos } from "@/types/photo";
import { createContext, useContext } from "react";

interface HouseSelectorContextType {
  selectedHouse: House;
  photos: Photos | null;
  isLoading: boolean;
  setSelectedHouse: (house: House) => void;
}

export const HouseSelectorContext =
  createContext<HouseSelectorContextType | null>(null);

export const useHouseSelector = () => {
  const context = useContext(HouseSelectorContext);
  if (!context) {
    throw new Error(
      "useHouseSelector must be used within HouseSelectorProvider"
    );
  }
  return context;
};
