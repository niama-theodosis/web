import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Youtube } from "lucide-react";
import type { HTMLAttributes, Ref } from "react";

// ROOT ************************************************************************************************************************************
export const SocialButtons = ({ className, ...props }: SocialButtonsProps) => {
  const socials = [
    { id: "Instagram", Icon: Instagram, url: "https://www.instagram.com/theodosis_memoirescellulaires" },
    { id: "Youtube", Icon: Youtube, url: "https://www.youtube.com/@Theod%C3%B4sisM%C3%A9moiresCellulairesTV/videos" },
    { id: "Facebook", Icon: Facebook, url: "https://www.facebook.com/TheodosisMemoiresCellulaires" },
  ];

  return (
    <div className={cn("flex items-center gap-1 lg:gap-2", className)} {...props}>
      {socials.map(({ Icon, id, url }) => (
        <TooltipProvider key={id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" color="primary" asChild>
                <a href={url ?? ""} target="_blank" aria-label={id}>
                  <Icon className="h-4 w-4"></Icon>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{id}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};

// TYPES ***********************************************************************************************************************************
export type SocialButtonsProps = HTMLAttributes<HTMLDivElement> & { ref?: Ref<HTMLDivElement> };
