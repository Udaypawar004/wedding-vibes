export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Every photograph felt like a memory we could step back into.",
    author: "Priya & Rahul",
    location: "Mumbai",
  },
  {
    quote:
      "They were invisible all day, and then handed us the most honest pictures of our family we own.",
    author: "Riya & Aman",
    location: "Indore",
  },
  {
    quote: "We keep finding new details. It still feels like that evening.",
    author: "Ananya & Arjun",
    location: "Bhopal",
  },
];

export const site = {
  name: "WeddingVibes",
  tagline: "Stories that last forever",
  email: "hello@weddingvibes.studio",
  phone: "+91 98765 43210",
  location: "Indore · Mumbai · Available worldwide",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
};
