"use client";

import { cn } from "@/lib/utils";
import * as Progress from "@radix-ui/react-progress";
import { motion } from "framer-motion";

type RadialProgressProps = {
  value: number;
  size?: number;
  className?: string;
};

const RadialProgress = ({
  value,
  size = 120,
  className,
}: RadialProgressProps) => {
  const strokeWidth = size / 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;
  const progressPercentage = `${value}%`;

  return (
    <div
      className={cn("relative", className)}
      style={{ width: size, height: size }}
    >
      <Progress.Root
        className="relative flex items-center justify-center overflow-hidden rounded-full"
        style={{
          transform: "rotate(-90deg)",
          width: size,
          height: size,
        }}
        value={value}
      >
        <svg width={size} height={size}>
          <circle
            className="text-gray-200"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <Progress.Indicator asChild>
            <circle
              className="text-primary-500"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx={size / 2}
              cy={size / 2}
            />
          </Progress.Indicator>
        </svg>
      </Progress.Root>
      <div className="absolute inset-0 flex items-center justify-center text-primary">
        <span
          className="block font-semibold"
          style={{
            fontSize: size / 4,
          }}
        >
          {progressPercentage}
        </span>
      </div>
    </div>
  );
};

export default RadialProgress;
