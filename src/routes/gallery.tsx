import { createFileRoute } from "@tanstack/react-router";
import { galleryImages } from "@/data/gallery";
import { MasonryGallery } from "@/components/portfolio/MasonryGallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTA } from "@/components/home/Sections";

const title = "Gallery | WeddingVibes Wedding Photography";
const description =
  "A curated gallery of candid wedding moments, details, portraits and celebrations by WeddingVibes.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <div className="mx-auto max-w-[1600px] px-6 pb-24 pt-36 md:px-10 md:pt-48">
        <SectionHeading as="h1" eyebrow="Gallery" title="Frames we keep coming back to" />
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          Select any photograph to open the full-screen viewer. Use the arrow keys to move between
          images, and Escape to close.
        </p>
        <div className="mt-14">
          <MasonryGallery items={galleryImages} />
        </div>
      </div>
      <ContactCTA />
    </>
  );
}
