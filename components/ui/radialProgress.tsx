"use client";
import { cn } from "@/lib/utils";
import * as Progress from "@radix-ui/react-progress";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [animatedValue, setAnimatedValue] = useState(0);
  const strokeWidth = size / 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  useEffect(() => {
    setAnimatedValue(value);
  }, [value]);

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
        value={animatedValue}
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
            <motion.circle
              className="text-primary-500"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              stroke="currentColor"
              fill="transparent"
              r={radius}
              cx={size / 2}
              cy={size / 2}
              initial={{ strokeDashoffset: circumference }}
              animate={{
                strokeDashoffset:
                  circumference - (animatedValue / 100) * circumference,
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </Progress.Indicator>
        </svg>
      </Progress.Root>
      <div className="absolute inset-0 flex items-center justify-center text-primary">
        <motion.span
          className="block font-semibold"
          style={{
            fontSize: size / 4,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {`${animatedValue}%`}
        </motion.span>
      </div>
    </div>
  );
};

export default RadialProgress;
