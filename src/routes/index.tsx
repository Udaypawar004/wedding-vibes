import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { FeaturedStories } from "@/components/home/FeaturedStories";
import {
  AboutPreview,
  ServicesPreview,
  SelectedGallery,
  Testimonials,
  SocialStrip,
  ContactCTA,
} from "@/components/home/Sections";

const title = "WeddingVibes | Wedding Photography Studio";
const description =
  "Documentary wedding photography capturing authentic stories, emotions and unforgettable moments across India and beyond.";

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
      <Testimonials />
      <SocialStrip />
      <ContactCTA />
    </>
  );
}
