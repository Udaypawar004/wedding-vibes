import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { categories, stories } from "@/data/portfolio";
import { films, reels } from "@/data/videos";
import { MasonryGallery } from "@/components/portfolio/MasonryGallery";
import { VideoGrid } from "@/components/portfolio/VideoGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/home/Sections";

const title = "Portfolio | WeddingVibes Wedding Photography";
const description =
  "Wedding stories, ring ceremonies, candid coverage, films and reels photographed by WeddingVibes.";

export const Route = createFileRoute("/portfolio")({
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
  component: Portfolio,
});

function Portfolio() {
  const [active, setActive] = useState<string>("All");

  const shownStories = useMemo(
    () => (active === "All" ? stories : stories.filter((s) => s.category === active)),
    [active],
  );

  const showFilms = active === "All" || active === "Films";
  const showReels = active === "All" || active === "Reels";
  const showStories = active !== "Films" && active !== "Reels";

  return (
    <>
      <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-36 md:px-10 md:pt-48">
        <SectionHeading as="h1" eyebrow="The work" title="Stories, in frames" />

        <div
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3"
          role="group"
          aria-label="Filter by category"
        >
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

        {showStories && (
          <div className="mt-16 space-y-24">
            {shownStories.map((story) => (
              <section key={story.id}>
                <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="eyebrow mb-3 text-muted-foreground">{story.category}</p>
                    <h2 className="font-serif text-3xl tracking-tight md:text-5xl">
                      {story.title}
                    </h2>
                  </div>
                  <Link
                    to="/story/$storyId"
                    params={{ storyId: story.id }}
                    className="eyebrow link-underline text-muted-foreground hover:text-foreground"
                  >
                    Open the full story
                  </Link>
                </Reveal>
                <MasonryGallery
                  items={story.images.slice(0, 6).map((p) => ({ src: p.url, alt: p.alt }))}
                />
              </section>
            ))}
            {shownStories.length === 0 && (
              <p className="py-20 text-center text-muted-foreground">
                No stories in this category yet.
              </p>
            )}
          </div>
        )}

        {showFilms && (
          <section className="mt-24">
            <Reveal className="mb-10">
              <p className="eyebrow mb-3 text-muted-foreground">Films</p>
              <h2 className="font-serif text-3xl tracking-tight md:text-5xl">Wedding films</h2>
            </Reveal>
            <VideoGrid videos={films} />
          </section>
        )}

        {showReels && (
          <section className="mt-24">
            <Reveal className="mb-10">
              <p className="eyebrow mb-3 text-muted-foreground">Reels</p>
              <h2 className="font-serif text-3xl tracking-tight md:text-5xl">WeddingVibes reels</h2>
            </Reveal>
            <VideoGrid videos={reels} />
          </section>
        )}
      </div>
      <ContactCTA />
    </>
  );
}
