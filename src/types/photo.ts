import { House } from "./houses";

export type Photos = {
  hero: string;
  verticals: string[];
  // horizontals: string[];
  horizontal: string;
};

export type HousePhotoConfig = {
  [key in House]: Photos;
};
