import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.45, 0.7]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <motion.img
        src={hero}
        alt="Bride and groom at golden hour with a flowing red dupatta"
        width={1920}
        height={1280}
        fetchPriority="high"
        style={{ y }}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-[118%] w-full object-cover"
      />
      <motion.div style={{ opacity: overlay }} className="absolute inset-0 bg-foreground" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-background">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="eyebrow tracking-[0.5em]"
        >
          WEDDINGVIBES
        </motion.p>

        <h1 className="mt-8 max-w-4xl text-balance font-serif text-5xl leading-[1.02] tracking-tight md:text-8xl">
          {["Stories", "that last", "forever"].map((line, i) => (
            <motion.span
              key={line}
              className="block overflow-hidden"
              initial={{ opacity: 0, y: "60%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.14, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="eyebrow absolute bottom-10 inline-flex flex-col items-center gap-3 text-background/85 hover:text-background"
        >
          Explore the work
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} strokeWidth={1.2} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
