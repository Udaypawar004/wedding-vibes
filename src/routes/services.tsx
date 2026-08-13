import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { Reveal, RevealImage } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTA } from "@/components/home/Sections";

const title = "Services | WeddingVibes Wedding Photography";
const description =
  "Wedding stories, pre-wedding sessions, engagements and cinematic wedding films by WeddingVibes.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <div className="mx-auto max-w-[1600px] px-6 pb-16 pt-36 md:px-10 md:pt-48">
        <SectionHeading as="h1" eyebrow="Services" title="How we work together" />
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {services.map((s, i) => (
          <section
            key={s.number}
            className="grid items-center gap-10 border-t border-border py-16 md:grid-cols-12 md:py-24"
          >
            <RevealImage
              src={s.image}
              alt={`${s.title} photography by WeddingVibes`}
              className={`aspect-[4/3] md:col-span-6 ${i % 2 ? "md:order-2 md:col-start-7" : ""}`}
            />
            <Reveal className={`md:col-span-5 ${i % 2 ? "md:order-1 md:col-start-1" : "md:col-start-8"}`}>
              <p className="eyebrow text-muted-foreground">{s.number}</p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight md:text-5xl">{s.title}</h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <ul className="mt-8 space-y-2">
                {s.includes.map((inc) => (
                  <li key={inc} className="eyebrow text-muted-foreground">
                    — {inc}
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>
        ))}
      </div>

      <ContactCTA />
    </>
  );
}
