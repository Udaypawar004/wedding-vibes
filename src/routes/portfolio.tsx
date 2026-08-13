import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { categories, stories } from "@/data/portfolio";
import { MasonryGallery } from "@/components/portfolio/MasonryGallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTA } from "@/components/home/Sections";

const title = "Portfolio | WeddingVibes Wedding Photography";
const description =
  "Selected wedding, pre-wedding, engagement and portrait stories photographed by WeddingVibes.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [active, setActive] = useState<string>("All");

  const items = useMemo(() => {
    const filtered = active === "All" ? stories : stories.filter((s) => s.category === active);
    return filtered.map((s) => ({
      src: s.coverImage,
      alt: `${s.title} — ${s.category} photography in ${s.location}`,
      caption: s.title,
      meta: `${s.location} · ${s.category}`,
    }));
  }, [active]);

  return (
    <>
      <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-36 md:px-10 md:pt-48">
        <SectionHeading as="h1" eyebrow="The work" title="Stories, in frames" />

        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3" role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={`eyebrow relative pb-1 transition-colors ${
                active === c ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
              {active === c && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute inset-x-0 bottom-0 h-px bg-accent"
                />
              )}
            </button>
          ))}
        </div>

        <div className="mt-14">
          <MasonryGallery items={items} />
          {items.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">No stories in this category yet.</p>
          )}
        </div>
      </div>
      <ContactCTA />
    </>
  );
}
