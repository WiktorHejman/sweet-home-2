import { House } from "./houses";

export type Photos = {
  hero: string;
  verticals: string[];
  // horizontals: string[];
  horizontalFirst: string;
  horizontalSecond: string;
};

export type HousePhotoConfig = {
  [key in House]: Photos;
};
