import { H3 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

// ROOT ************************************************************************************************************************************
export const Block = async ({ className, items, text }: BlockProps) => {
  return (
    <section className={cn("prose sm:prose-lg xl:prose-xl", className)}>
      <H3 text={text} />
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

// TYPES ***********************************************************************************************************************************
export type BlockProps = HTMLAttributes<HTMLElement> & { items: string[]; text: string };
