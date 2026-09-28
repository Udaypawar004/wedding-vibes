import { useState } from "react";
import { motion } from "motion/react";
import { BlurImage } from "@/components/ui/Reveal";
import { Lightbox } from "./Lightbox";

export interface GalleryItem {
  src: string;
  alt: string;
  caption?: string;
  meta?: string;
}

export function MasonryGallery({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {items.map((item, i) => (
          <motion.button
            key={`${item.src}-${i}`}
            type="button"
            onClick={() => setIndex(i)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative block w-full overflow-hidden break-inside-avoid text-left"
            aria-label={`Open image: ${item.alt}`}
          >
            <BlurImage
              src={item.src}
              alt={item.alt}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="w-full"
              imgClassName="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/20" />
            {item.caption ? (
              <span className="pointer-events-none absolute bottom-5 left-5 translate-y-3 text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="block font-serif text-2xl">{item.caption}</span>
                {item.meta ? <span className="eyebrow block opacity-80">{item.meta}</span> : null}
              </span>
            ) : null}
          </motion.button>
        ))}
      </div>

      <Lightbox
        images={items}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </>
  );
}
