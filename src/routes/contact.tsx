import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { site } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";

const title = "Contact | WeddingVibes Wedding Photography";
const description =
  "Planning something beautiful? Share your date and venue and we'll get back to you within two days.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contact,
});

interface FormState {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
}

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  eventType: "Wedding",
  eventDate: "",
  message: "",
};

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent";

function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof FormState) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "A few words about your day help us reply properly.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSent(true);
  };

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
    `${form.eventType} enquiry — ${form.name}`,
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nEvent: ${form.eventType}\nDate: ${form.eventDate}\n\n${form.message}`,
  )}`;

  return (
    <div className="mx-auto max-w-[1600px] px-6 pb-32 pt-36 md:px-10 md:pt-48">
      <SectionHeading as="h1" eyebrow="Let's talk" title="Planning something beautiful?" />

      <div className="mt-16 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-border p-10"
                role="status"
              >
                <h2 className="font-serif text-3xl tracking-tight">Thank you, {form.name}.</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Your enquiry has been noted. We usually reply within two working days. If you'd
                  like to send it straight to our inbox as well, use the link below.
                </p>
                <a href={mailto} className="eyebrow link-underline mt-8 inline-block">
                  Send via email instead
                </a>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                noValidate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid gap-8 sm:grid-cols-2"
              >
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="eyebrow text-muted-foreground">Name</label>
                  <input id="name" className={fieldClass} value={form.name} onChange={set("name")}
                    aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
                  {errors.name && <p id="name-error" className="mt-2 text-xs text-destructive">{errors.name}</p>}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="eyebrow text-muted-foreground">Email</label>
                  <input id="email" type="email" className={fieldClass} value={form.email} onChange={set("email")}
                    aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
                  {errors.email && <p id="email-error" className="mt-2 text-xs text-destructive">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="eyebrow text-muted-foreground">Phone</label>
                  <input id="phone" type="tel" className={fieldClass} value={form.phone} onChange={set("phone")} />
                </div>

                <div>
                  <label htmlFor="eventType" className="eyebrow text-muted-foreground">Event type</label>
                  <select id="eventType" className={fieldClass} value={form.eventType} onChange={set("eventType")}>
                    <option>Wedding</option>
                    <option>Pre-Wedding</option>
                    <option>Engagement</option>
                    <option>Portraits</option>
                    <option>Wedding Film</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="eventDate" className="eyebrow text-muted-foreground">Event date</label>
                  <input id="eventDate" type="date" className={fieldClass} value={form.eventDate} onChange={set("eventDate")} />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="eyebrow text-muted-foreground">Message</label>
                  <textarea id="message" rows={4} className={`${fieldClass} resize-none`} value={form.message} onChange={set("message")}
                    aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
                  {errors.message && <p id="message-error" className="mt-2 text-xs text-destructive">{errors.message}</p>}
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="eyebrow bg-foreground px-10 py-4 text-background transition-colors duration-500 hover:bg-accent hover:text-accent-foreground"
                  >
                    Send inquiry
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <aside className="space-y-8 md:col-span-4 md:col-start-9">
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            We take a limited number of weddings each season so every couple gets our full
            attention. Do reach out early.
          </p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={15} strokeWidth={1.2} className="text-accent" />
              <a href={`mailto:${site.email}`} className="link-underline">{site.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={15} strokeWidth={1.2} className="text-accent" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-underline">{site.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Instagram size={15} strokeWidth={1.2} className="text-accent" />
              <a href={site.instagram} target="_blank" rel="noreferrer" className="link-underline">@weddingvibes</a>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={15} strokeWidth={1.2} className="text-accent" />
              {site.location}
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
