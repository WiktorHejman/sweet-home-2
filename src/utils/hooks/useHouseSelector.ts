import { House } from "@/types/houses";
import { Photos } from "@/types/photo";
import { createContext, useContext } from "react";

interface HouseSelectorContextType {
  selectedHouse: House;
  setSelectedHouse: (house: House) => void;
  photos: Photos | null;
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
