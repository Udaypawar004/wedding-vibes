# Timeless Frames Studio

WeddingVibes V1 — Premium Wedding Photography Portfolio

Project Goal

Build WeddingVibes V1, a premium, modern wedding photography portfolio website.

The purpose of V1 is only to showcase the photographer's work, brand, style, services, and contact information.

Do NOT build the booking system, CRM, admin dashboard, authentication, payment system, or customer management in V1.

The website should feel like a high-end professional photography studio website, not a generic business template.

The photography should be the primary visual element.

1. Technology Stack

Use:

Next.js

TypeScript

React

Tailwind CSS

Framer Motion for animations

Lucide React for icons

Next.js Image component for optimized images

Use the latest stable versions compatible with the project.

Keep the architecture clean and scalable so that a backend/database can be introduced in V2 without restructuring the entire application.

2. V1 Scope

Build only the following:

WeddingVibes
│
├── Home
├── Portfolio
├── Gallery
├── About
├── Services
└── Contact


Optional:

Testimonials

FAQ

Instagram/social media section

Do NOT implement:

Authentication

Login/signup

Admin dashboard

Booking management

Customer accounts

CRM

Payments

Calendar

OTP

Database

Email automation

Customer portal

The Contact page can initially use a simple client-side form with clear contact information and social links. It does not need backend submission in V1.

3. Design Direction

Create a visual identity inspired by:

Luxury wedding photography

Editorial magazines

High-end fashion websites

Minimalist photography portfolios

Modern Indian wedding aesthetics

Cinematic storytelling

The website should feel:

Elegant

Premium

Emotional

Minimal

Sophisticated

Artistic

Modern

Trustworthy

Avoid:

Generic Bootstrap-style layouts

Excessive cards

Excessive gradients

Overly bright colors

Corporate SaaS aesthetics

Huge amounts of text

Cheap-looking animations

Excessive rounded cards

Cluttered layouts

The images should dominate the experience.

4. Visual Language

Use a sophisticated neutral palette.

Suggested direction:

Background:
Warm white / ivory / off-white

Primary text:
Deep charcoal / near black

Secondary:
Muted gray

Accent:
Subtle warm gold / beige / earthy tone


Do not overuse gold.

Typography should combine:

Elegant serif typography for major headings

Clean modern sans-serif typography for body text and navigation

The combination should feel editorial and luxurious.

5. Global Navigation

Create a minimal navigation bar.

Example:

WEDDINGVIBES

WORK
ABOUT
SERVICES
CONTACT


On mobile:

WEDDINGVIBES                         ☰


The navbar should:

Be responsive

Have smooth transitions

Become slightly different after scrolling

Maintain excellent readability over hero images

Include subtle hover animations

Have a mobile menu animation

Do not make the navbar unnecessarily large.

6. Home Page

The homepage is the most important page.

Structure it as:

Hero
↓
Introduction
↓
Featured Stories
↓
About Photographer
↓
Services
↓
Selected Gallery
↓
Testimonials
↓
Instagram/Social
↓
Contact CTA
↓
Footer


7. Hero Section

Create a cinematic full-screen hero.

Use a large wedding photograph or video-style image.

Example concept:

[ FULL SCREEN WEDDING IMAGE ]

                 WEDDINGVIBES

       STORIES THAT LAST FOREVER

           Explore the Work ↓


The hero should have:

Full viewport height

High-quality image

Elegant typography

Subtle dark overlay if required

Smooth entrance animation

Scroll indicator

Subtle image zoom/parallax effect

Do not overload the hero with text.

The photograph must remain the focus.

8. Introduction Section

Create a short editorial introduction.

Example concept:

WE CAPTURE
THE MOMENTS
YOU FEEL.

WeddingVibes documents real emotions,
quiet moments and unforgettable celebrations
through timeless photography.


Use large typography and plenty of whitespace.

Animate the text subtly as the user scrolls.

9. Featured Stories

Create a visually interesting portfolio section.

Example:

SELECTED STORIES

[ Large Image ]
RAHUL & PRIYA
Mumbai · Wedding

                  [ Image ]
                  AMAN & RIYA
                  Indore · Wedding

[ Image ]
ARJUN & ANANYA
Bhopal · Pre-Wedding


Do NOT use a standard grid everywhere.

Use:

Asymmetric layouts

Different image sizes

Editorial spacing

Full-width images

Overlapping elements where appropriate

Each story should be clickable.

10. Portfolio Page

Create a dedicated /portfolio page.

Categories:

ALL
WEDDINGS
PRE-WEDDINGS
ENGAGEMENTS
COUPLES
PORTRAITS


Create an elegant masonry/editorial gallery.

Requirements:

Responsive

Lazy loading

Smooth hover effects

Image reveal animations

Category filtering

Lightbox/gallery viewer

Keyboard navigation where appropriate

Accessible controls

Images should never feel cramped.

11. Gallery Page

Create /gallery.

The gallery should focus almost entirely on photography.

Use:

Masonry layouts

Full-width images

Portrait images

Landscape images

Detail shots

Emotional moments

Candid photographs

When an image is clicked:

Image
 ↓
Fullscreen viewer
 ↓
Previous / Next
 ↓
Close


Add subtle transitions.

12. About Page

Create /about.

Structure:

Hero Image

ABOUT WEDDINGVIBES

Photographer story

Photography philosophy

Personal introduction

Why we photograph weddings

Selected personal images

CTA


The page should feel personal rather than corporate.

Include a photographer portrait section.

Use storytelling instead of large blocks of text.

13. Services Page

Create /services.

Potential services:

Wedding Photography
Pre-Wedding Photography
Engagement Photography
Couple Portraits
Traditional Ceremonies
Candid Photography
Wedding Films


Do not make this look like a pricing SaaS page.

Instead:

01
WEDDING STORIES

02
PRE-WEDDING

03
ENGAGEMENTS

04
WEDDING FILMS


Each service should have:

Large visual

Short description

Editorial typography

Subtle animation

At the bottom:

Let's create something beautiful together.

[ Get in Touch ]


14. Testimonials

Create a minimal testimonial section.

Example:

"Every photograph felt like a memory
we could step back into."

— Priya & Rahul


Keep testimonials visually elegant.

Do not create huge testimonial cards.

15. Contact Page

Create /contact.

The contact page should be simple and premium.

Include:

LET'S TALK

Planning something beautiful?

Name
Email
Phone
Event Type
Event Date
Message

[ SEND INQUIRY ]


Also show:

Email
Phone
Instagram
Location


Since V1 has no backend, the form can:

Validate fields

Show a success state

Optionally provide a mailto: fallback

Do not implement an API/database yet.

16. Footer

Create a minimal luxury footer.

Include:

WEDDINGVIBES

Instagram
Facebook
Email
Phone

WORK
ABOUT
SERVICES
CONTACT

© 2026 WeddingVibes


Add a subtle large text element such as:

YOUR STORY.
OUR FRAME.


17. Animations

Use Framer Motion.

Animations should be:

Subtle

Smooth

Cinematic

Purposeful

Implement:

Page transitions

Smooth page entrance/exit.

Image reveal

Images should reveal using:

Clip-path

Scale

Fade

Mask animation

Text reveal

Headings can animate word-by-word or line-by-line.

Hover effects

Portfolio images can:

Slightly zoom

Reveal title

Show category/location

Transition smoothly

Scroll effects

Use subtle:

Parallax

Fade-in

Scale

Translate

Do NOT animate everything.

Performance is more important than flashy effects.

18. Image Handling

Use next/image.

Create a centralized portfolio data file.

Example:

data/
├── portfolio.ts
├── services.ts
├── testimonials.ts
└── gallery.ts


Example portfolio object:

{
  id: "rahul-priya",
  title: "Rahul & Priya",
  category: "Wedding",
  location: "Mumbai",
  coverImage: "/images/portfolio/rahul-priya/cover.jpg",
  images: [
    "/images/portfolio/rahul-priya/01.jpg",
    "/images/portfolio/rahul-priya/02.jpg",
    "/images/portfolio/rahul-priya/03.jpg"
  ]
}


Do not hard-code portfolio content directly inside React components.

19. Component Architecture

Use reusable components.

Example:

components/
│
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
│
├── home/
│   ├── Hero.tsx
│   ├── Intro.tsx
│   ├── FeaturedStories.tsx
│   ├── AboutPreview.tsx
│   ├── ServicesPreview.tsx
│   ├── Testimonials.tsx
│   └── ContactCTA.tsx
│
├── portfolio/
│   ├── PortfolioGrid.tsx
│   ├── PortfolioCard.tsx
│   ├── CategoryFilter.tsx
│   └── Lightbox.tsx
│
├── services/
│   └── ServiceSection.tsx
│
├── ui/
│   ├── Button.tsx
│   ├── Reveal.tsx
│   └── SectionHeading.tsx


Avoid giant components.

20. Responsive Design

The website must work beautifully on:

Mobile

Tablet

Laptop

Large desktop

Design mobile intentionally.

Do not simply shrink the desktop layout.

Pay special attention to:

Hero image cropping

Typography

Gallery layouts

Navigation

Touch interactions

Lightbox

Spacing

Performance

21. Accessibility

Implement:

Semantic HTML

Proper heading hierarchy

Alt text

Keyboard navigation

Focus states

Accessible buttons

Accessible mobile menu

Accessible lightbox

Sufficient text contrast

Do not sacrifice accessibility for visual design.

22. SEO

Implement basic SEO.

Include:

Page titles

Meta descriptions

Open Graph metadata

Twitter/X metadata

Canonical URLs where appropriate

robots.txt

sitemap.xml

Example:

WeddingVibes | Wedding Photography

Capturing authentic wedding stories,
emotions and unforgettable moments.


Also use appropriate structured metadata where useful.

23. Performance

Photography websites can become extremely heavy.

Optimize for performance.

Requirements:

Use next/image

Proper image sizes

Lazy loading

Avoid loading every gallery image immediately

Use responsive image sizes

Compress images

Avoid unnecessary JavaScript

Avoid excessive Framer Motion animations

Maintain good Core Web Vitals

The site should feel fast even with many photographs.

24. Content Strategy

Do not fill the website with generic lorem ipsum.

Use realistic placeholder content related to wedding photography.

However, keep all content easy to replace later.

Images should also be stored in a centralized location.

Example:

public/
└── images/
    ├── hero/
    ├── portfolio/
    ├── gallery/
    ├── about/
    └── services/


25. V2 Preparation

Even though V1 has no backend, structure the application so V2 can later add:

Authentication
      ↓
PostgreSQL
      ↓
Admin Dashboard
      ↓
Bookings
      ↓
Customers
      ↓
Calendar
      ↓
Payments
      ↓
Email
      ↓
Analytics


Do not implement these features now.

However, don't create an architecture that makes adding them difficult.

Keep:

Data separate from UI

Components reusable

Services separated

Forms isolated

Types centralized

Content centralized

26. Git Workflow

Use this branch structure:

master
│
└── dev
     │
     ├── feature/home
     ├── feature/portfolio
     ├── feature/gallery
     ├── feature/about
     ├── feature/services
     ├── feature/contact
     └── feature/animations


Never directly develop features on master.

Recommended workflow:

dev
 ↓
feature/home
 ↓
commit
 ↓
PR
 ↓
dev
 ↓
testing
 ↓
master


Use meaningful commits:

feat: add hero section
feat: add portfolio gallery
feat: add portfolio filtering
feat: add about page
feat: add contact page
feat: add page animations
fix: improve mobile navigation
perf: optimize gallery images


27. Development Rules

Before implementing anything:

Inspect the existing repository if one is provided.

Understand the current structure.

Do not blindly copy existing implementation.

Create a clean architecture.

Build reusable components.

Keep content separate from components.

Test every page on mobile and desktop.

Don't introduce unnecessary dependencies.

Don't build V2 functionality.

Prioritize visual quality and performance.

28. Implementation Order

Follow this exact order:

Step 1

Set up:

Next.js
TypeScript
Tailwind
Framer Motion
Lucide


Step 2

Create:

Navbar
Footer
Global styles
Typography
Colors
Buttons
Section components


Step 3

Build homepage:

Hero
Intro
Featured Stories
About
Services
Testimonials
CTA
Footer


Step 4

Build:

Portfolio
Gallery
Lightbox
Filtering


Step 5

Build:

About
Services
Contact


Step 6

Add:

Animations
Page transitions
Hover effects
Scroll effects


Step 7

Add:

SEO
Accessibility
Performance optimization
Responsive improvements


Step 8

Perform final testing.

29. Definition of Done

V1 is complete when:

Home page is complete

Portfolio page is complete

Gallery page is complete

About page is complete

Services page is complete

Contact page is complete

Navigation works

Mobile menu works

Portfolio filtering works

Gallery lightbox works

Animations are smooth

Responsive design works

Images are optimized

SEO metadata exists

Accessibility basics are implemented

No unnecessary backend exists

No authentication exists

No booking system exists

No admin dashboard exists

Code is organized for future V2 development

Final Product Vision

The final V1 should feel like a website that a professional wedding photographer could actually use to present their brand.

The first impression should be:

Photography first.

The visitor should immediately think:

"These photographers tell beautiful stories."

Not:

"This is a website with lots of features."

Focus on:

Photography → Emotion → Storytelling → Trust → Contact

V1 is a premium photography portfolio.

V2 will transform it into a complete photography business platform.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fbd70d00-eb1a-40eb-825b-16ca497bca55).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
