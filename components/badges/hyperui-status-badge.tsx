"use client";

import React from "react";
import { cn } from "@/lib/cn";

// Adapted from HyperUI (https://www.hyperui.dev) - MIT License.
// Simple status badge with soft background or outline variant.

export interface HyperuiStatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "soft" | "outline";
  color?: "purple" | "green" | "red" | "blue" | "gray";
  children?: React.ReactNode;
}

const colorMap = {
  purple: {
    soft: "bg-purple-100 text-purple-700",
    outline: "border border-purple-500 text-purple-700",
  },
  green: {
    soft: "bg-green-100 text-green-700",
    outline: "border border-green-500 text-green-700",
  },
  red: {
    soft: "bg-red-100 text-red-700",
    outline: "border border-red-500 text-red-700",
  },
  blue: {
    soft: "bg-blue-100 text-blue-700",
    outline: "border border-blue-500 text-blue-700",
  },
  gray: {
    soft: "bg-gray-100 text-gray-700",
    outline: "border border-gray-500 text-gray-700",
  },
} as const;

export const HyperuiStatusBadge = React.forwardRef<
  HTMLSpanElement,
  HyperuiStatusBadgeProps
>(({ variant = "soft", color = "purple", className, children = "Live", ...props }, ref) => {
  const styles = colorMap[color][variant];
  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-medium whitespace-nowrap",
        styles,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});

HyperuiStatusBadge.displayName = "HyperuiStatusBadge";
