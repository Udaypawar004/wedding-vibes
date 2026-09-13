import { motion } from "motion/react";
import { useState, type ReactNode } from "react";

// Matches URLs like /media/candid-01.jpg → /media/responsive/candid-01-420.jpg
function buildSrcSet(src: string): string | undefined {
  const match = src.match(/^\/media\/([^/]+?)(\.[a-z0-9]+)$/i);
  if (!match) return undefined;
  const [, name, ext] = match;
  return [
    `/media/responsive/${name}-420${ext} 420w`,
    `/media/responsive/${name}-720${ext} 720w`,
    `/media/responsive/${name}-900${ext} 900w`,
    `${src} 1600w`,
  ].join(", ");
}

function createBlurPlaceholder() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#f5efe9"/>
          <stop offset="50%" stop-color="#e2d3ba"/>
          <stop offset="100%" stop-color="#c9b48d"/>
        </linearGradient>
      </defs>
      <rect width="120" height="120" fill="url(#g)"/>
      <circle cx="38" cy="42" r="22" fill="white" fill-opacity="0.18"/>
      <rect x="27" y="74" width="62" height="14" rx="7" fill="white" fill-opacity="0.12"/>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

export function BlurImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  sizes,
  priority = false,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  const [loaded, setLoaded] = useState(false);
  const placeholder = createBlurPlaceholder();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={placeholder}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full scale-110 object-cover blur-2xl saturate-150 transition-opacity duration-700 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={src}
        srcSet={buildSrcSet(src)}
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`relative h-full w-full object-cover transition-all duration-700 ease-out ${
          loaded ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-md"
        } ${imgClassName}`}
      />
    </div>
  );
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

export function Reveal({ children, delay = 0, className, y = 24 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export function RevealImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
}: RevealImageProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <BlurImage
        src={src}
        alt={alt}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="h-full w-full"
        imgClassName={imgClassName}
      />
    </div>
  );
}
