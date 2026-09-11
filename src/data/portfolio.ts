import { photo, type Photo } from "./media";
import { priyanshuImages, candidImages, ringImages } from "./media.generated";

export type Category = "Weddings" | "Ring Ceremony" | "Candid" | "Films" | "Reels";

export const categories: Array<"All" | Category> = [
  "All",
  "Weddings",
  "Ring Ceremony",
  "Candid",
  "Films",
  "Reels",
];

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  intro: string;
  cover: Photo;
  images: Photo[];
  videoIds?: string[];
}

const priyanshuAlts = [
  "Bride in a red lehenga and veil, lit softly from the side",
  "Bride with her eyes closed in a quiet moment before the ceremony",
  "Bride smiling as light flares across the frame",
  "Bridal portrait in low, warm light",
  "Bride in shadow, jewellery catching the light",
  "Bride looking down, veil framing her face",
  "Full-length bridal portrait against a dark wall",
  "Bride adjusting her bangles",
  "Bride turning towards the camera",
  "Bridal portrait with mehndi hands raised",
  "Bride seated at the venue before the ceremony",
  "Bride laughing during the getting-ready hour",
  "Close portrait of the bride in bridal jewellery",
  "Bride framed by her veil",
];

const candidAlts = [
  "A friend helping the groom with his turban",
  "Groom waiting against a red-lit wall",
  "Groom standing quietly before the ceremony",
  "Groom in warm afternoon light",
  "Groom fastening his sherwani buttons",
  "The couple standing together before the ceremony",
  "The couple in soft daylight",
  "Family gathered together for a portrait",
  "A guest in a red saree in the afternoon light",
  "Hands helping the groom get dressed",
  "Last-minute adjustments before the ceremony",
  "Groom sharing a laugh with someone off camera",
  "Groom mid-conversation in the golden hour",
  "The couple standing close together",
];

const ringAlts = [
  "Bridal outfit laid out before the ceremony",
  "Detail of hand-worked embroidery on the gown",
  "Bride reflected in the mirror while getting ready",
  "Close portrait with the necklace catching the light",
  "Necklace and hands, photographed close",
  "Bride backlit against a dark room",
  "Portrait in low light before the ring exchange",
  "Bride in shadow, waiting",
  "Bride walking down the hotel corridor",
  "The back of the bride's braid and gown",
  "Bride resting against a softly lit wall",
  "Wide frame of the bride in the corridor",
];

const priyanshuPhotos = priyanshuImages.map((img, i) =>
  photo(img, priyanshuAlts[i] ?? "Wedding photograph by WeddingVibes"),
);
const candidPhotos = candidImages.map((img, i) =>
  photo(img, candidAlts[i] ?? "Candid wedding photograph by WeddingVibes"),
);
const ringPhotos = ringImages.map((img, i) =>
  photo(img, ringAlts[i] ?? "Ring ceremony photograph by WeddingVibes"),
);

export const stories: Story[] = [
  {
    id: "priyanshu",
    title: "Priyanshu",
    subtitle: "Wedding Story",
    category: "Weddings",
    intro:
      "A celebration of love, family and the moments that pass too quickly — photographed from the quiet of the getting-ready room to the last of the evening light.",
    cover: priyanshuPhotos[0]!,
    images: priyanshuPhotos,
  },
  {
    id: "ring-ceremony",
    title: "Ring Ceremony",
    subtitle: "A celebration before forever",
    category: "Ring Ceremony",
    intro:
      "An evening built around one promise. Mirrors, corridors, borrowed light — and a highlight film cut from the same night.",
    cover: ringPhotos[5] ?? ringPhotos[0]!,
    images: ringPhotos,
    videoIds: ["ring-ceremony-highlight"],
  },
  {
    id: "candid-moments",
    title: "Candid Moments",
    subtitle: "The moments nobody planned",
    category: "Candid",
    intro:
      "Nothing here was directed. These are the in-between frames — a hand on a shoulder, a laugh across the room, the last check in the mirror.",
    cover: candidPhotos[0]!,
    images: candidPhotos,
  },
];

export function findStory(id: string): Story | undefined {
  return stories.find((s) => s.id === id);
}

export const featuredStories = stories;
export const allPhotos: Photo[] = [...priyanshuPhotos, ...ringPhotos, ...candidPhotos];
export { priyanshuPhotos, candidPhotos, ringPhotos };
