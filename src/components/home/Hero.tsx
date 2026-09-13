import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import heroMobileImg from "@/assets/heroMobile.jpg";

const heroDesktopSrcSet = `${heroImg} 1920w, ${heroImg} 1280w`;
const heroMobileSrcSet = `${heroMobileImg} 637w`;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.45, 0.7]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <picture className="absolute inset-0">
        <source media="(max-width: 767px)" srcSet={heroMobileSrcSet} sizes="100vw" type="image/jpeg" />
        <source media="(min-width: 768px)" srcSet={heroDesktopSrcSet} sizes="100vw" type="image/jpeg" />
        <motion.img
          src={heroImg}
          srcSet={heroDesktopSrcSet}
          sizes="100vw"
          alt="Bride in a red lehenga and veil, photographed in soft side light"
          width={1920}
          height={1280}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          style={{ y }}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="h-[118%] w-full object-cover"
        />
      </picture>
      <motion.div style={{ opacity: overlay }} className="absolute inset-0 bg-foreground" />

      <div className="relative z-10 flex h-full flex-col items-center justify-start px-5 pt-20 text-center text-background sm:px-8 md:items-start md:justify-center md:px-24 md:pt-0 md:text-left">

        <h1 className="mt-10 font-serif opacity-60 max-w-full text-center text-[2.15rem] font-black leading-[0.9] tracking-[-0.06em] sm:text-5xl md:mt-8 md:max-w-3xl md:text-left md:text-8xl md:leading-[1.02] md:tracking-tight">
          {[
            { text: "Stories", delay: 0.7 },
            { text: "that last", delay: 0.84 },
            { text: "forever", delay: 0.98 },
          ].map((line) => (
            <motion.span
              key={line.text}
              className="mr-2 inline-block whitespace-nowrap align-top"
              initial={{ opacity: 0, y: "60%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: line.delay, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {line.text}
            </motion.span>
          ))}
        </h1>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="eyebrow inline-flex flex-col items-center gap-3 text-background/85 hover:text-background"
        >
          <span>Explore the work</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex"
          >
            <ArrowDown size={16} strokeWidth={1.2} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
