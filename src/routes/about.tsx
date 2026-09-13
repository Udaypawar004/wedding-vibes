import { createFileRoute } from "@tanstack/react-router";
import { Reveal, RevealImage } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/home/Sections";
import { candidPhotos, ringPhotos, priyanshuPhotos } from "@/data/portfolio";
import aboutBackImage from "@/assets/aboutBack.jpg";

const title = "About | WeddingVibes — Wedding Photographer in Betul, MP";
const description =
  "WeddingVibes is a documentary wedding photographer based in Betul, Madhya Pradesh — photographing weddings, ring ceremonies and celebrations with patience, presence and natural light.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const left = ringPhotos[2] ?? ringPhotos[0]!;
const right = priyanshuPhotos[10] ?? priyanshuPhotos[0]!;

function About() {
  return (
    <>
      <section className="relative h-[70svh] w-full overflow-hidden">
        <img
          src={aboutBackImage}
          alt="WeddingVibes photography studio about image"
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
          <Reveal
            delay={0.1}
            className="space-y-6 text-base leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8"
          >
            <p>
              WeddingVibes photographs and films weddings, ring ceremonies and the celebrations
              around them — quietly, and mostly from the edges of the room.
            </p>
            <p>
              We don't interrupt a ritual to get a better angle, and we'd rather wait ten minutes
              for a real laugh than direct one into existence. What you see here is real work from
              real days.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-12">
          <RevealImage src={left.url} alt={left.alt} className="aspect-[4/5] md:col-span-5" />
          <RevealImage
            src={right.url}
            alt={right.alt}
            className="aspect-[3/2] self-end md:col-span-6 md:col-start-7"
          />
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
                p: "The best frames happen when nobody is performing. We stay close, stay quiet, and let the day lead.",
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
