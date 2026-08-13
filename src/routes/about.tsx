import { createFileRoute } from "@tanstack/react-router";
import { Reveal, RevealImage } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/home/Sections";
import { images } from "@/data/portfolio";

const title = "About | WeddingVibes Wedding Photography";
const description =
  "Meet the photographer behind WeddingVibes — a documentary approach to weddings built on patience, presence and natural light.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative h-[70svh] w-full overflow-hidden">
        <img
          src={images.p2}
          alt="Couple walking a misty hillside at dawn"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/35" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1600px] px-6 pb-14 md:px-10">
            <h1 className="font-serif text-4xl tracking-tight text-background md:text-7xl">
              About WeddingVibes
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <h2 className="text-balance font-serif text-3xl leading-tight tracking-tight md:text-5xl">
              A wedding is the only day your whole family stands in one room.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8">
            <p>
              I'm Aarav Mehra. I picked up a camera at my sister's wedding in 2014 and never really
              put it down. What began as a favour became a decade of documenting families across
              Indore, Mumbai, Udaipur and a dozen cities in between.
            </p>
            <p>
              I photograph quietly. I don't interrupt a ritual to get a better angle, and I'd rather
              wait ten minutes for a real laugh than direct one into existence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-12">
          <RevealImage src={images.about} alt="Portrait of Aarav Mehra with his camera" className="aspect-[4/5] md:col-span-5" />
          <RevealImage src={images.p4} alt="Bride laughing with her family" className="aspect-[3/2] self-end md:col-span-6 md:col-start-7" />
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow mb-10 text-muted-foreground">Philosophy</p>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                h: "Presence over posing",
                p: "The best frames happen when nobody is performing. I stay close, stay quiet, and let the day lead.",
              },
              {
                h: "Light before everything",
                p: "Natural light, honest colour, no heavy filters. Photographs that will still look right in thirty years.",
              },
              {
                h: "Fewer, better pictures",
                p: "You'll receive a curated gallery, not a dump of every shutter click. Editing is part of the craft.",
              },
            ].map((item, i) => (
              <Reveal key={item.h} delay={i * 0.08}>
                <h3 className="font-serif text-2xl tracking-tight md:text-3xl">{item.h}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
