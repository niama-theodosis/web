import { Sparkles } from "lucide-react";
import { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

// STYLES **********************************************************************************************************************************
export const HEADING = tv({
  base: `font-heading scroll-m-20 font-bold leading-none tracking-tight text-foreground text-balance`,
  variants: {
    level: {
      1: `text-4xl 
      lg:text-5xl 
      2xl:text-6xl`,
      2: `text-2xl`,
      3: `text-2xl`,
      4: `text-xl`,
      5: `text-lg`,
      6: `text-base`,
    },
  },
  defaultVariants: {
    level: 1,
  },
});

// ROOT ************************************************************************************************************************************
export function Heading({ className, level = 3, text }: HeadingProps) {
  const H: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = `h${level}`;

  return (
    <H className={HEADING({ level, className: ["text-secondary flex items-baseline gap-2", className] })}>
      <Sparkles className="text-primary flex-none" />
      <span>{text}</span>
    </H>
  );
}

// TYPES ***********************************************************************************************************************************
export type HeadingLevel = VariantProps<typeof HEADING>["level"];
export type HeadingProps = ComponentProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> & { level?: HeadingLevel; text: string };
