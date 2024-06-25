"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const progressPercentage = `${value}%`;

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-7 w-full overflow-hidden rounded-md bg-secondary",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator asChild>
        <motion.div
          className="h-full w-full flex-1 bg-primary-500"
          initial={{ x: "-100%" }}
          animate={{ x: `-${100 - (value || 0)}%` }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
        />
      </ProgressPrimitive.Indicator>
      <span className="absolute font-medium text-xs text-muted-foreground right-3 top-1/2 -translate-y-1/2">
        {progressPercentage}
      </span>
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
