import { Link } from "@tanstack/react-router";
import { featuredStories } from "@/data/portfolio";
import { RevealImage, Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";

const layout = [
  "md:col-span-8 md:col-start-1 aspect-[4/5]",
  "md:col-span-5 md:col-start-8 md:-mt-32 aspect-[3/2]",
  "md:col-span-6 md:col-start-2 aspect-[3/2]",
];

export function FeaturedStories() {
  return (
    <section id="work" className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <Reveal>
          <p className="eyebrow mb-4 text-muted-foreground">Selected stories</p>
          <h2 className="font-serif text-4xl tracking-tight md:text-6xl">Recent chapters</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/portfolio" className="eyebrow link-underline text-muted-foreground hover:text-foreground">
            View all work
          </Link>
        </Reveal>
      </div>

      <div className="grid gap-12 md:grid-cols-12 md:gap-y-24">
        {featuredStories.map((story, i) => (
          <div key={story.id} className={layout[i] ?? "md:col-span-6 aspect-[3/2]"}>
            <Link to="/portfolio" className="group block h-full">
              <RevealImage
                src={story.coverImage}
                alt={`${story.title} — ${story.category} in ${story.location}`}
                className="h-full"
                imgClassName="transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-2xl tracking-tight md:text-3xl">{story.title}</h3>
                <p className="eyebrow text-muted-foreground">
                  {story.location} · {story.category}
                </p>
              </div>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">{story.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>

      <Reveal className="mt-20 text-center">
        <LinkButton to="/portfolio" variant="outline">
          Explore the portfolio
        </LinkButton>
      </Reveal>
    </section>
  );
}
