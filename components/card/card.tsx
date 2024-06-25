import { Banknote, CircleAlert } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import RadialProgress from "../ui/radialProgress";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type CardProps = {
  title: string;
  progress: number;
  balance: string;
  currency: string;
  icon: React.ReactNode;
  expanded?: boolean;
};

const Card = ({
  title,
  progress,
  balance,
  currency,
  icon,
  expanded = true,
}: CardProps) => {
  return (
    <>
      <div
        className={cn(
          "w-full border border-border text-accent-foreground rounded-lg",
          {
            hidden: !expanded,
          }
        )}
      >
        <div className="flex items-center justify-between gap-2 border-b border-border p-2">
          <div className="flex items-center gap-2 px-1">
            <Banknote className="h-4 w-4" />
            <span className="text-sm">{title}</span>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="h-7 w-7 hover:bg-transparent text-muted-foreground"
          >
            {icon}
          </Button>
        </div>
        <div className="p-2 space-y-3">
          <p className="text-3xl font-semibold">
            {balance}
            <span className="text-xs text-muted-foreground font-medium ml-1">
              {currency}
            </span>
          </p>
          <Progress value={progress} />
          <Link
            href="/dashboard/store"
            className="block h-fit text-muted-foreground font-normal text-sm underline underline-offset-2 text-center hover:text-foreground transition-colors"
          >
            Manage your balance
          </Link>
        </div>
      </div>
      <div className={cn({ hidden: expanded })}>
        <Tooltip>
          <TooltipTrigger>
            <RadialProgress value={progress} size={40} />
          </TooltipTrigger>
          <TooltipContent side="right">{`${balance} ${currency}`}</TooltipContent>
        </Tooltip>
      </div>
    </>
  );
};

export default Card;
