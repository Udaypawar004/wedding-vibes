import { allPhotos } from "./portfolio";
import type { Photo } from "./media";

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  orientation: "portrait" | "landscape";
}

function toGallery(p: Photo): GalleryImage {
  return {
    src: p.url,
    alt: p.alt,
    width: p.width,
    height: p.height,
    orientation: p.width >= p.height ? "landscape" : "portrait",
  };
}

/** Interleaved so portraits and landscapes alternate through the masonry grid. */
export const galleryImages: GalleryImage[] = allPhotos.map(toGallery);
