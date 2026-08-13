import { images } from "./portfolio";

export interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
  includes: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "Wedding Stories",
    description:
      "Full-day documentary coverage of your wedding — the rituals, the chaos in the corridors, and the moments nobody planned.",
    image: images.p1,
    includes: ["Two photographers", "Full-day coverage", "Curated gallery", "Fine-art album"],
  },
  {
    number: "02",
    title: "Pre-Wedding",
    description:
      "An unhurried session in a place that means something to you, shot like a film rather than a photoshoot.",
    image: images.p2,
    includes: ["Location scouting", "3–4 hour session", "Wardrobe guidance", "60+ edited frames"],
  },
  {
    number: "03",
    title: "Engagements & Ceremonies",
    description:
      "Intimate coverage of roka, haldi, mehndi and engagement evenings, with a light footprint and warm, natural light.",
    image: images.p5,
    includes: ["Half-day coverage", "Family portraits", "Same-week previews"],
  },
  {
    number: "04",
    title: "Wedding Films",
    description:
      "A cinematic short film cut from real sound — vows, laughter, music — delivered alongside your photographs.",
    image: images.p6,
    includes: ["4K capture", "Live audio", "Highlight film", "Full ceremony edit"],
  },
];
