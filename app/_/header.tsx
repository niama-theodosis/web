import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { HTMLAttributes, Ref } from "react";
import { MeetingButton } from "./meeting-button";
import { SocialButtons } from "./social-buttons";

// ROOT ************************************************************************************************************************************
export const Header = async ({ className, ...props }: HeaderProps) => {
  return (
    <header className={cn("border-b border-transparent bg-white transition-all", className)} {...props}>
      <div className="mx-auto px-4 py-2 sm:py-4 xl:px-8">
        <div className="flex items-center justify-between">
          <Button variant="link" className="font-heading p-0 text-3xl font-bold text-black hover:no-underline lg:text-4xl" asChild>
            <a href="/">Theodôsis</a>
          </Button>
          <div className="flex items-center gap-1 lg:gap-2">
            <MeetingButton color="primary" size="hybrid" />
            <SocialButtons className="hidden sm:flex" />
          </div>
        </div>
      </div>
    </header>
  );
};

// TYPES ***********************************************************************************************************************************
export type HeaderProps = HTMLAttributes<HTMLElement> & { ref?: Ref<HTMLElement> };
