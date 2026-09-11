import type { VideoItem } from "./media";
import { posters } from "./media.generated";

export const films: VideoItem[] = [
  {
    id: "ring-ceremony-highlight",
    title: "Ring Ceremony Highlight",
    description: "The evening of the ring exchange, cut as a short cinematic highlight.",
    kind: "film",
    provider: "drive",
    sourceId: "1K3rf2_8ejpy2ZQltsxIEYoiY7amUTUM6",
    poster: posters["ring-highlight"]!,
    orientation: "landscape",
  },
  {
    id: "wedding-highlight",
    title: "Wedding Highlight",
    description: "A full wedding day condensed into its loudest and quietest moments.",
    kind: "film",
    provider: "drive",
    sourceId: "1sZO2_gdfYHu7NU4kRhOU0ZPZn54xLS9Z",
    poster: posters["wedding-highlight"]!,
    orientation: "landscape",
  },
  {
    id: "birthday-film",
    title: "Birthday Film",
    description: "A birthday celebration filmed with the same care we bring to a wedding.",
    kind: "film",
    provider: "drive",
    sourceId: "1XExqAcO3cI8INXxGkUXORkyp6wppyy3Q",
    poster: posters["birthday"]!,
    orientation: "landscape",
  },
];

export const reels: VideoItem[] = [
  {
    id: "haldi-reel",
    title: "Haldi",
    description: "Colour, laughter and turmeric.",
    kind: "reel",
    provider: "drive",
    sourceId: "1rCWu2SsC_tv1QkyOWCkI4ztrkJ0nybvY",
    poster: posters["haldi-reel"]!,
    orientation: "portrait",
  },
  {
    id: "sangeet-reel",
    title: "Sangeet",
    description: "The night the family took the floor.",
    kind: "reel",
    provider: "drive",
    sourceId: "1iT51Ccr6AHtDgBICNSDBGleIvl_xRnnH",
    poster: posters["sangeet-reel"]!,
    orientation: "portrait",
  },
  {
    id: "wedding-reel",
    title: "Wedding",
    description: "A wedding day in sixty seconds.",
    kind: "reel",
    provider: "drive",
    sourceId: "1bGODjiEAVr6L8ank82X9KGFrTbCWD5ir",
    poster: posters["wedding-reel"]!,
    orientation: "portrait",
  },
];

export const allVideos: VideoItem[] = [...films, ...reels];

export function findVideo(id: string): VideoItem | undefined {
  return allVideos.find((v) => v.id === id);
}
