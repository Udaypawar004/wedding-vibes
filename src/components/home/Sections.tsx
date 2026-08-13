import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { Reveal, RevealImage } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { services } from "@/data/services";
import { testimonials, site } from "@/data/testimonials";
import { galleryImages } from "@/data/gallery";
import aboutImg from "@/assets/about.jpg";

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
      <div className="grid items-center gap-12 md:grid-cols-12">
        <RevealImage
          src={aboutImg}
          alt="Portrait of the WeddingVibes photographer at work"
          className="aspect-[4/5] md:col-span-5"
        />
        <Reveal className="md:col-span-6 md:col-start-7">
          <p className="eyebrow mb-6 text-muted-foreground">The photographer</p>
          <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            I photograph weddings the way I'd want mine remembered.
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            I'm Aarav, and I've spent the last decade in the corners of wedding halls, waiting for
            the glance between a mother and her daughter. No posing marathons, no forced smiles —
            just presence, patience, and light.
          </p>
          <Link to="/about" className="eyebrow link-underline mt-10 inline-block">
            Read the full story
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow mb-4 text-muted-foreground">What we do</p>
          <h2 className="font-serif text-4xl tracking-tight md:text-6xl">Services</h2>
        </Reveal>
        <ul className="mt-14 divide-y divide-border border-t border-border">
          {services.map((s, i) => (
            <li key={s.number}>
              <Reveal delay={i * 0.05}>
                <Link
                  to="/services"
                  className="group flex items-baseline gap-6 py-7 transition-colors hover:text-accent md:gap-12"
                >
                  <span className="eyebrow w-10 text-muted-foreground">{s.number}</span>
                  <span className="font-serif text-2xl tracking-tight md:text-4xl">{s.title}</span>
                  <span className="ml-auto hidden max-w-sm text-sm text-muted-foreground md:block">
                    {s.description}
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function SelectedGallery() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
      <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-serif text-4xl tracking-tight md:text-6xl">Selected frames</h2>
        <Link to="/gallery" className="eyebrow link-underline text-muted-foreground hover:text-foreground">
          Enter the gallery
        </Link>
      </Reveal>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {galleryImages.slice(0, 4).map((img, i) => (
          <RevealImage
            key={img.src + i}
            src={img.src}
            alt={img.alt}
            className={i % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/4] md:mt-12"}
          />
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
        <Reveal>
          <p className="eyebrow mb-12 text-muted-foreground">Kind words</p>
        </Reveal>
        <div className="space-y-20">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <blockquote className="text-balance font-serif text-2xl italic leading-snug md:text-4xl">
                “{t.quote}”
              </blockquote>
              <p className="eyebrow mt-6 text-muted-foreground">
                {t.author} · {t.location}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SocialStrip() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-24">
      <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">On Instagram</h2>
        <a
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
          className="eyebrow link-underline inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
        >
          <Instagram size={15} strokeWidth={1.2} /> @weddingvibes
        </a>
      </Reveal>
      <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
        {galleryImages.slice(0, 6).map((img, i) => (
          <a key={img.src + i} href={site.instagram} target="_blank" rel="noreferrer" className="group block aspect-square overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto max-w-[1600px] px-6 py-28 text-center md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow mb-8 text-background/60">Let's talk</p>
          <h2 className="text-balance font-serif text-4xl leading-tight tracking-tight md:text-7xl">
            Let's create something beautiful together.
          </h2>
          <div className="mt-12">
            <LinkButton to="/contact" variant="light">
              Get in touch
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
