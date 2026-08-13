import { images } from "./portfolio";

export interface GalleryImage {
  src: string;
  alt: string;
  orientation: "portrait" | "landscape";
}

export const galleryImages: GalleryImage[] = [
  { src: images.p1, alt: "Bride and groom during a traditional garland ceremony", orientation: "portrait" },
  { src: images.p2, alt: "Couple walking a misty hillside at dawn", orientation: "landscape" },
  { src: images.p3, alt: "Bridal hands with mehndi holding a white bouquet", orientation: "portrait" },
  { src: images.p4, alt: "Bride laughing with family before the ceremony", orientation: "landscape" },
  { src: images.p5, alt: "Ring exchange by candlelight", orientation: "portrait" },
  { src: images.p6, alt: "Wedding celebration under string lights at night", orientation: "landscape" },
  { src: images.hero, alt: "Couple at golden hour with a flowing red dupatta", orientation: "landscape" },
  { src: images.about, alt: "Photographer at work in natural light", orientation: "portrait" },
];
