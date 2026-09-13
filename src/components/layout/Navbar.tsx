import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
const links = [
  { to: "/portfolio", label: "Work" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const transparent = overHero && !scrolled;
  const navTextClass = transparent ? "text-on-photo" : "text-foreground";
  const mobileMenuClass = transparent ? "bg-[#0f0f0f] text-on-photo" : "bg-background text-foreground";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-[1600px] items-center justify-between px-6 transition-all duration-500 md:px-10 ${
          scrolled ? "h-16" : "h-20"
        } ${navTextClass}`}
      >
        <Link to="/" className="eyebrow text-sm tracking-[0.34em]">
          WEDDINGVIBES
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-10">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="eyebrow link-underline opacity-80 transition-opacity hover:opacity-100"
                  activeProps={{ className: "eyebrow link-underline opacity-100 text-accent" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`rounded-full ${transparent ? "text-on-photo hover:bg-on-photo/15 hover:text-on-photo" : "text-foreground hover:bg-foreground/5"}`}
          >
            {open ? <X size={22} strokeWidth={1.2} /> : <Menu size={22} strokeWidth={1.2} />}
          </Button>
        </div>
      </nav>
 
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`overflow-hidden md:hidden ${mobileMenuClass}`}
          >
            <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <Link
                    to={l.to}
                    className={`block border-b py-4 font-serif text-3xl ${
                      transparent ? "border-white/10 text-on-photo" : "border-border text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
