import { Link } from "@tanstack/react-router";
import { featuredStories } from "@/data/portfolio";
import { RevealImage, Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";

const layout = [
  "md:col-span-8 md:col-start-1 aspect-[4/5]",
  "md:col-span-5 md:col-start-8 md:-mt-32 aspect-[3/4]",
  "md:col-span-6 md:col-start-2 aspect-[3/4]",
];

export function FeaturedStories() {
  return (
    <section id="work" className="mx-auto w-full max-w-[1600px] px-6 md:px-10 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <Reveal>
          <p className="eyebrow mb-4 text-muted-foreground">Selected stories</p>

          <h2 className="font-serif text-4xl tracking-tight md:text-6xl">Recent chapters</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            to="/portfolio"
            className="eyebrow link-underline text-muted-foreground hover:text-foreground"
          >
            View all work
          </Link>
        </Reveal>
      </div>

      <div className="grid min-w-0 gap-12 md:grid-cols-12 md:gap-y-24">
        {featuredStories.map((story, i) => (
          <div key={story.id} className={`min-w-0 ${layout[i] ?? "md:col-span-6 aspect-[3/4]"}`}>
            <Link
              to="/story/$storyId"
              params={{ storyId: story.id }}
              className="group block h-full min-w-0"
            >
              <div className="mt-12 mb-3 flex items-baseline justify-between px-4 md:px-10">
                <h3 className="font-serif text-2xl tracking-tight md:text-3xl">{story.title}</h3>
                <p className="eyebrow shrink-0 text-muted-foreground">{story.category}</p>
              </div>

              <RevealImage
                src={story.cover.url}
                alt={story.cover.alt}
                className="h-full w-full"
                loadingClassName="animate-pulse bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 [animation-duration:1.4s]"
                imgClassName="transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />

              <p className="mt-2 mb-3 max-w-md text-sm text-muted-foreground">{story.subtitle}</p>

              <hr />
            </Link>
          </div>
        ))}
      </div>

      <Reveal className="mt-30 text-center">
        <LinkButton to="/portfolio" variant="outline">
          Explore the portfolio
        </LinkButton>
      </Reveal>
    </section>
  );
}
