import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { site } from "@/data/testimonials";

const nav = [
  { to: "/portfolio", label: "Work" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 pb-10 pt-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="eyebrow tracking-[0.34em]">WEDDINGVIBES</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Documentary wedding photography for couples who want to remember how it felt.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="space-y-3">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="eyebrow link-underline text-muted-foreground hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 hover:text-foreground">
                <Mail size={15} strokeWidth={1.2} /> {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-3 hover:text-foreground">
                <Phone size={15} strokeWidth={1.2} /> {site.phone}
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-foreground">
                <Instagram size={15} strokeWidth={1.2} /> Instagram
              </a>
            </li>
            <li>
              <a href={site.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 hover:text-foreground">
                <Facebook size={15} strokeWidth={1.2} /> Facebook
              </a>
            </li>
          </ul>
        </div>

        <p
          aria-hidden="true"
          className="mt-20 font-serif text-[15vw] leading-[0.85] tracking-tight text-foreground/10 md:text-[11vw]"
        >
          Your story.<br />Our frame.
        </p>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© 2026 WeddingVibes. All rights reserved.</p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
