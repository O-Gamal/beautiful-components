"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

type HandlerProps = {
  width: number;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  className?: string;
};

const Handler = ({
  expanded = false,
  setExpanded,
  width = 40,
  className,
}: HandlerProps) => {
  const height = width * 7;
  const strokeWidth = width * 0.9;
  const padding = strokeWidth / 1.5;
  const viewBoxWidth = width + strokeWidth;
  const viewBoxHeight = height + strokeWidth;

  const topY = padding;
  const bottomY = viewBoxHeight - padding;

  const pathVariants = {
    expanded: {
      d: [
        `M${viewBoxWidth - padding},${topY}`,
        `L${padding},${viewBoxHeight / 2}`,
        `M${padding},${viewBoxHeight / 2}`,
        `L${viewBoxWidth - padding},${bottomY}`,
      ].join(" "),
    },
    collapsed: {
      d: [
        `M${padding},${topY}`,
        `L${viewBoxWidth - padding},${viewBoxHeight / 2}`,
        `M${viewBoxWidth - padding},${viewBoxHeight / 2}`,
        `L${padding},${bottomY}`,
      ].join(" "),
    },
  };

  return (
    <Button
      variant="ghost"
      onClick={() => setExpanded(!expanded)}
      className={cn(
        "px-1.5 py-8 rounded-none rounded-tl-lg rounded-bl-lg border border-border border-r-0 text-muted-foreground/80 hover:text-foreground/80 transition-colors",
        className
      )}
    >
      <svg
        width={viewBoxWidth}
        height={viewBoxHeight}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer" }}
        className=""
      >
        <motion.path
          variants={pathVariants}
          initial="collapsed"
          animate={expanded ? "expanded" : "collapsed"}
          transition={{ duration: 0.5 }}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </Button>
  );
};

export default Handler;
