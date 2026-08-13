import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface LinkButtonProps {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
}

const base =
  "eyebrow inline-flex items-center gap-3 px-8 py-4 transition-colors duration-500";

const variants = {
  solid: "bg-foreground text-background hover:bg-accent hover:text-accent-foreground",
  outline: "border border-foreground/25 text-foreground hover:border-accent hover:text-accent",
  light: "border border-background/50 text-background hover:bg-background hover:text-foreground",
};

export function LinkButton({ to, children, variant = "solid", className = "" }: LinkButtonProps) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
