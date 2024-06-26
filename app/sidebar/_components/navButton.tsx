"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

type NavButtonProps = {
  title: string;
  href: string;
  icon: React.ReactNode;
  expanded?: boolean;
};

const NavButton = ({ title, href, icon, expanded = false }: NavButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href={href}>
          <motion.div
            layout
            className={cn(
              "relative flex items-center justify-between gap-0.5 rounded-lg text-muted-foreground transition-colors p-1",
              {
                "text-accent-foreground text-primary-500 dark:text-primary-400":
                  isActive,
              },
              {
                "hover:bg-muted/80 hover:text-foreground": !isActive,
              }
            )}
          >
            <div className="flex items-center">
              <span className="flex items-center justify-center h-9 w-9 md:h-8 md:w-8">
                {icon}
              </span>
              <AnimatePresence>
                {expanded && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { delay: 0 } }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                    className="text-sm whitespace-nowrap"
                  >
                    {title}
                  </motion.span>
                )}
              </AnimatePresence>
              {!expanded && <span className="sr-only">{title}</span>}
            </div>
            <AnimatePresence>
              {expanded && isActive && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, transition: { delay: 0 } }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  <ChevronRight
                    className={cn("h-4 w-4 mr-1 text-primary-400")}
                  />
                </motion.span>
              )}
            </AnimatePresence>
            {isActive ? (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 -z-10 rounded-lg bg-primary-50 dark:bg-primary-900"
              />
            ) : null}
          </motion.div>
        </Link>
      </TooltipTrigger>
      {!expanded && <TooltipContent side="right">{title}</TooltipContent>}
    </Tooltip>
  );
};

export default NavButton;
