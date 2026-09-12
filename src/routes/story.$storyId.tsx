import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { findStory, stories } from "@/data/portfolio";
import { findVideo } from "@/data/videos";
import { MasonryGallery } from "@/components/portfolio/MasonryGallery";
import { VideoGrid } from "@/components/portfolio/VideoGrid";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCTA } from "@/components/home/Sections";

export const Route = createFileRoute("/story/$storyId")({
  loader: ({ params }) => {
    const story = findStory(params.storyId);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => {
    const story = loaderData?.story;
    const title = story
      ? `${story.title} | WeddingVibes`
      : "Story | WeddingVibes";
    const description = story?.intro ?? "A wedding story photographed by WeddingVibes.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: StoryPage,
});

function StoryPage() {
  const { story } = Route.useLoaderData();
  const videos = (story.videoIds ?? []).map(findVideo).filter(Boolean);
  const others = stories.filter((s) => s.id !== story.id);

  return (
    <>
      <section className="relative h-[80svh] w-full overflow-hidden">
        <img
          src={story.cover.url}
          alt={story.cover.alt}
          width={story.cover.width}
          height={story.cover.height}
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1600px] px-6 pb-14 text-background md:px-10">
            <p className="eyebrow mb-4 text-background/75">{story.category}</p>
            <h1 className="font-serif text-4xl tracking-tight md:text-7xl">{story.title}</h1>
            <p className="mt-3 font-serif text-xl italic text-background/80 md:text-2xl">
              {story.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-balance font-serif text-2xl leading-snug md:text-3xl">{story.intro}</p>
        </Reveal>

        <div className="mt-16">
          <MasonryGallery
            items={story.images.map((p) => ({ src: p.url, alt: p.alt }))}
          />
        </div>

        {videos.length > 0 && (
          <div className="mt-24">
            <Reveal>
              <p className="eyebrow mb-4 text-muted-foreground">The film</p>
              <h2 className="mb-10 font-serif text-3xl tracking-tight md:text-5xl">
                Watch the story move
              </h2>
            </Reveal>
            <VideoGrid videos={videos as NonNullable<(typeof videos)[number]>[]} />
          </div>
        )}

        <div className="mt-24 border-t border-border pt-10">
          <p className="eyebrow mb-6 text-muted-foreground">More stories</p>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {others.map((s) => (
              <Link
                key={s.id}
                to="/story/$storyId"
                params={{ storyId: s.id }}
                className="font-serif text-2xl tracking-tight transition-colors hover:text-accent md:text-4xl"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
