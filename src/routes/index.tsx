import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { FeaturedStories } from "@/components/home/FeaturedStories";
import {
  AboutPreview,
  ServicesPreview,
  SelectedGallery,
  SocialStrip,
  ContactCTA,
} from "@/components/home/Sections";

const title = "WeddingVibes | Wedding Photographer in Betul, Madhya Pradesh";
const description =
  "WeddingVibes — professional wedding photographer based in Betul, MP. Covering weddings, ring ceremonies and pre-wedding shoots across Betul, Bhopal, Nagpur and Madhya Pradesh.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedStories />
      <AboutPreview />
      <ServicesPreview />
      <SelectedGallery />
      <SocialStrip />
      <ContactCTA />
    </>
  );
}
