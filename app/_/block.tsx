import { H3 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { SquareCheckBig } from "lucide-react";
import type { HTMLAttributes } from "react";

// ROOT ************************************************************************************************************************************
export const Block = async ({ className, items, text }: BlockProps) => {
  return (
    <section className={cn("prose prose-ul:ps-0 prose-li:ps-0 sm:prose-lg xl:prose-xl", className)}>
      <H3 text={text} />
      <ul>
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <SquareCheckBig className="text-primary mt-1.5 size-4 flex-none sm:mt-2 xl:mt-3" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

// TYPES ***********************************************************************************************************************************
export type BlockProps = HTMLAttributes<HTMLElement> & { items: string[]; text: string };
