import { useState } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import type { VideoItem } from "@/data/media";
import { VideoPlayerModal } from "./VideoPlayerModal";

export function VideoGrid({ videos }: { videos: VideoItem[] }) {
  const [active, setActive] = useState<VideoItem | null>(null);

  return (
    <>
      <div
        className={
          videos.every((v) => v.orientation === "portrait")
            ? "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
            : "grid gap-6 md:grid-cols-2"
        }
      >
        {videos.map((video, i) => (
          <motion.button
            key={video.id}
            type="button"
            onClick={() => setActive(video)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="group block w-full text-left"
            aria-label={`Play ${video.title}`}
          >
            <div
              className={`relative overflow-hidden ${
                video.orientation === "portrait" ? "aspect-[9/16]" : "aspect-video"
              }`}
            >
              <img
                src={video.poster.url}
                alt={`${video.title} — still frame`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-foreground/25 transition-colors duration-500 group-hover:bg-foreground/10" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-background/70 text-background transition-transform duration-500 group-hover:scale-110">
                  <Play size={20} strokeWidth={1.2} className="ml-1" />
                </span>
              </span>
            </div>
            <h3 className="mt-4 font-serif text-xl tracking-tight md:text-2xl">{video.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{video.description}</p>
          </motion.button>
        ))}
      </div>

      <VideoPlayerModal video={active} onClose={() => setActive(null)} />
    </>
  );
}
