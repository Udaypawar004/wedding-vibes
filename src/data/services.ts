import { priyanshuImages, candidImages, ringImages, posters } from "./media.generated";

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
    image: priyanshuImages[0]!.url,
    includes: ["Full-day coverage", "Candid and portrait work", "Curated gallery", "Fine-art album"],
  },
  {
    number: "02",
    title: "Ring Ceremonies",
    description:
      "Intimate coverage of the engagement evening — getting ready, the exchange, and everything around it.",
    image: ringImages[5]!.url,
    includes: ["Half-day coverage", "Family portraits", "Curated gallery"],
  },
  {
    number: "03",
    title: "Candid Coverage",
    description:
      "An unobtrusive second eye on the day, working only with available light and never interrupting a ritual.",
    image: candidImages[0]!.url,
    includes: ["Documentary approach", "Natural light", "Same-week previews"],
  },
  {
    number: "04",
    title: "Wedding Films & Reels",
    description:
      "A cinematic highlight film cut from real sound, plus short vertical reels made for sharing.",
    image: posters["wedding-highlight"]!.url,
    includes: ["Highlight film", "Live audio", "Vertical reels", "Delivered with your photographs"],
  },
];
