import { Heading, HeadingLevel } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

// ROOT ************************************************************************************************************************************
export const Feature = async ({ className, items, level = 3, title }: FeatureProps) => {
  return (
    <section className={cn("prose sm:prose-lg xl:prose-xl", className)}>
      <Heading level={level} text={title} />
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

// TYPES ***********************************************************************************************************************************
export type FeatureProps = HTMLAttributes<HTMLElement> & { items: string[]; level?: HeadingLevel; title: string };
