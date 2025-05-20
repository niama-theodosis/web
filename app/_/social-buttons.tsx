import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Youtube } from "lucide-react";
import type { HTMLAttributes, Ref } from "react";

// ROOT ************************************************************************************************************************************
export const SocialButtons = ({ className, ...props }: SocialButtonsProps) => {
  const socials = [
    { id: "instagram", Icon: Instagram, url: "" },
    { id: "youtube", Icon: Youtube, url: "" },
    { id: "facebook", Icon: Facebook, url: "" },
  ];

  return (
    <div className={cn("flex items-center gap-1 lg:gap-2", className)} {...props}>
      {socials.map(({ Icon, id, url }) => (
        <Button key={id} size="icon" asChild>
          <a href={url ?? ""} target="_blank" aria-label={id}>
            <Icon className="h-4 w-4"></Icon>
          </a>
        </Button>
      ))}
    </div>
  );
};

// TYPES ***********************************************************************************************************************************
export type SocialButtonsProps = HTMLAttributes<HTMLDivElement> & { ref?: Ref<HTMLDivElement> };
