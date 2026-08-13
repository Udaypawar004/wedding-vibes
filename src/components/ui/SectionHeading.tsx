import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow ? (
        <p className="eyebrow mb-5 text-muted-foreground">{eyebrow}</p>
      ) : null}
      <Tag className="text-balance font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
        {title}
      </Tag>
    </Reveal>
  );
}
