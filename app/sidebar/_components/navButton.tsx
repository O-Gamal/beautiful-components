"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type NavButtonProps = {
  title: string;
  href: string;
  icon: React.ReactNode;
  expanded?: boolean;
};

const NavButton = ({ title, href, icon, expanded = false }: NavButtonProps) => {
  const isActive = window.location.hash === `${href}`;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={cn(
            "flex items-center justify-between gap-0.5 rounded-lg text-muted-foreground transition-colors hover:text-foreground p-1 hover:bg-muted/80",
            {
              "bg-primary-50 dark:bg-primary-900 text-accent-foreground text-primary-500 dark:text-primary-400":
                isActive,
            }
          )}
        >
          <div className="flex items-center">
            <span className="flex items-center justify-center h-9 w-9 md:h-8 md:w-8">
              {icon}
            </span>
            <span
              className={cn("text-sm", {
                "sr-only": !expanded,
              })}
            >
              {title}
            </span>
          </div>
          {expanded && isActive && (
            <ChevronRight className={cn("h-4 w-4 mr-1 text-primary-400")} />
          )}
        </Link>
      </TooltipTrigger>
      {!expanded && <TooltipContent side="right">{title}</TooltipContent>}
    </Tooltip>
  );
};

export default NavButton;
