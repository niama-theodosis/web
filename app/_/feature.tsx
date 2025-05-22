import { H3 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

// ROOT ************************************************************************************************************************************
export const Feature = async ({ className, items, title }: FeatureProps) => {
  return (
    <section className={cn("prose sm:prose-lg xl:prose-xl", className)}>
      <H3 text={title} />
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

// TYPES ***********************************************************************************************************************************
export type FeatureProps = HTMLAttributes<HTMLElement> & { items: string[]; title: string };
