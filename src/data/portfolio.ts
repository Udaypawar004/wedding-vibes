import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";

export const images = { p1, p2, p3, p4, p5, p6, hero, about };

export type Category =
  | "Wedding"
  | "Pre-Wedding"
  | "Engagement"
  | "Couples"
  | "Portraits";

export const categories: Array<"All" | Category> = [
  "All",
  "Wedding",
  "Pre-Wedding",
  "Engagement",
  "Couples",
  "Portraits",
];

export interface Story {
  id: string;
  title: string;
  category: Category;
  location: string;
  year: string;
  excerpt: string;
  coverImage: string;
  orientation: "portrait" | "landscape";
  images: string[];
}

export const stories: Story[] = [
  {
    id: "rahul-priya",
    title: "Rahul & Priya",
    category: "Wedding",
    location: "Mumbai",
    year: "2025",
    excerpt: "Three days of ritual, rain and quiet glances by the sea.",
    coverImage: p1,
    orientation: "portrait",
    images: [p1, p3, p6, p4],
  },
  {
    id: "aman-riya",
    title: "Aman & Riya",
    category: "Pre-Wedding",
    location: "Indore",
    year: "2025",
    excerpt: "A morning walk into the fog, before everything changed.",
    coverImage: p2,
    orientation: "landscape",
    images: [p2, p5, p4],
  },
  {
    id: "arjun-ananya",
    title: "Arjun & Ananya",
    category: "Engagement",
    location: "Bhopal",
    year: "2024",
    excerpt: "Candlelight, family, and a ring that fit on the first try.",
    coverImage: p5,
    orientation: "portrait",
    images: [p5, p1, p3],
  },
  {
    id: "vikram-sneha",
    title: "Vikram & Sneha",
    category: "Couples",
    location: "Udaipur",
    year: "2024",
    excerpt: "Lake palaces, borrowed boats and an unhurried afternoon.",
    coverImage: p6,
    orientation: "landscape",
    images: [p6, p2, p4],
  },
  {
    id: "kabir-meera",
    title: "Kabir & Meera",
    category: "Portraits",
    location: "Jaipur",
    year: "2024",
    excerpt: "Studio light, old jewellery, and a very steady gaze.",
    coverImage: p3,
    orientation: "portrait",
    images: [p3, p5, p1],
  },
  {
    id: "dev-anika",
    title: "Dev & Anika",
    category: "Wedding",
    location: "Goa",
    year: "2023",
    excerpt: "A barefoot ceremony that ended in laughter and salt air.",
    coverImage: p4,
    orientation: "landscape",
    images: [p4, p6, p2],
  },
];

export const featuredStories = stories.slice(0, 3);
