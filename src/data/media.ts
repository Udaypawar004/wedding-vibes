/**
 * Media abstraction layer.
 *
 * The UI never talks to a storage provider directly — it consumes the types and
 * helpers below. Swapping the CDN (or moving video hosting) later only requires
 * changing this file and the generated manifest, not the portfolio components.
 */
import type { MediaImage } from "./media.generated";

export type { MediaImage };

export interface Photo extends MediaImage {
  alt: string;
}

export type VideoKind = "film" | "reel";

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  kind: VideoKind;
  /** Streaming provider. Only the media layer knows about it. */
  provider: "drive";
  sourceId: string;
  poster: MediaImage;
  orientation: "landscape" | "portrait";
}

/** Streaming URL for the premium in-site player. */
export function videoEmbedUrl(video: VideoItem): string {
  return `https://drive.google.com/file/d/${video.sourceId}/preview`;
}

export function photo(image: MediaImage, alt: string): Photo {
  return { ...image, alt };
}

export function aspect(image: MediaImage): "portrait" | "landscape" | "square" {
  if (image.width === image.height) return "square";
  return image.width > image.height ? "landscape" : "portrait";
}
