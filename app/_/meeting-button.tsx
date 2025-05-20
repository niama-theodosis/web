import { Button, type ButtonProps } from "@/components/ui/button";
import { CalendarHeart } from "lucide-react";
import Link from "next/link";

// ROOT ************************************************************************************************************************************
export const MeetingButton = ({ color, service, size, ...props }: MeetingButtonProps) => (
  <Button asChild size={size} color={color ?? "secondary"} {...props}>
    <Link href={`/rendez-vous${service ? "/" + service : ""}`}>
      <CalendarHeart className="h-4 w-4"></CalendarHeart>
      {size === "hybrid" && <span className="sr-only lg:not-sr-only lg:ml-2 lg:whitespace-nowrap">Prendre rendez-vous</span>}
      {size !== "hybrid" && size !== "icon" && <span className="ml-2">Prendre rendez-vous</span>}
    </Link>
  </Button>
);

// TYPES ***********************************************************************************************************************************
export type MeetingButtonProps = Omit<ButtonProps, "asChild" | "children"> & { service?: string };
