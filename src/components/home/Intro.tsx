import { Reveal } from "@/components/ui/Reveal";

export function Intro() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-44">
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <h2 className="text-balance font-serif text-4xl leading-[1.06] tracking-tight md:text-7xl">
            We capture the moments <em className="text-accent">you feel</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="md:col-span-4 md:col-start-9 md:pt-4">
          <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
            WeddingVibes documents real emotion, quiet in-between moments and unforgettable
            celebrations — photographed with restraint, printed to last, and made to be looked at
            fifty years from now.
          </p>
          <p className="eyebrow mt-8 text-foreground">Since 2016 · 240+ weddings</p>
        </Reveal>
      </div>
    </section>
  );
}
