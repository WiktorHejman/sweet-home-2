export const STORAGE = {
  BUCKETS: {
    GALLERY: "gallery-images",
  },
  FOLDERS: ["dzieciol", "sojka"] as const,
  BATCH_SIZE: 12,
} as const;

export type StorageFolder = (typeof STORAGE.FOLDERS)[number];
