import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useEffect } from "react";
import { videoEmbedUrl, type VideoItem } from "@/data/media";

interface Props {
  video: VideoItem | null;
  onClose: () => void;
}

export function VideoPlayerModal({ video, onClose }: Props) {
  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${video.title} player`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-foreground/96 p-4 md:p-10"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close player"
            className="absolute right-5 top-5 text-background/80 transition-colors hover:text-background"
          >
            <X size={26} strokeWidth={1.1} />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`w-full overflow-hidden bg-black ${
              video.orientation === "portrait"
                ? "aspect-[9/16] max-h-[82vh] max-w-[min(100%,46vh)]"
                : "aspect-video max-w-5xl"
            }`}
          >
            <iframe
              src={videoEmbedUrl(video)}
              title={video.title}
              allow="autoplay; fullscreen"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </motion.div>

          <div className="mt-6 max-w-xl text-center text-background">
            <h2 className="font-serif text-2xl tracking-tight md:text-3xl">{video.title}</h2>
            <p className="mt-2 text-sm text-background/70">{video.description}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
