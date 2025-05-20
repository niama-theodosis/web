import { Sparkles } from "lucide-react";
import { tv, type VariantProps } from "tailwind-variants";

// HEADING *********************************************************************************************************************************
export const HEADING = tv({
  base: `font-heading scroll-m-20 font-bold leading-none tracking-tight text-foreground text-balance`,
  variants: {
    level: {
      1: `text-4xl 
      lg:text-5xl 
      2xl:text-6xl`,
      2: `text-2xl 
      lg:text-3xl 
      2xl:text-4xl`,
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

export function H3({ className, level = 3, text }: { className?: string; level?: VariantProps<typeof HEADING>["level"]; text: string }) {
  return (
    <h3 className={HEADING({ level, className: ["text-secondary flex items-baseline gap-2", className] })}>
      <Sparkles className="text-primary flex-none" />
      <span>{text}</span>
    </h3>
  );
}

// P ***************************************************************************************************************************************
export const P = tv({
  base: `font-light text-gray-500 
  md:text-lg 
  lg:text-xl`,
});
