"use client";

import React, { type ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
  flipOnHover?: boolean;
}

export function FlipCard({
  front,
  back,
  className,
  flipOnHover = true,
}: FlipCardProps) {
  return (
    <div
      className={cn(
        "group relative h-64 w-full max-w-sm [perspective:1000px]",
        className
      )}
    >
      <div
        className={cn(
          "relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]",
          flipOnHover && "group-hover:[transform:rotateY(180deg)]"
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white p-6 shadow-lg [backface-visibility:hidden] dark:bg-zinc-900">
          {front}
        </div>
        {/* Back */}
        <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-zinc-900 p-6 text-white shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] dark:bg-white dark:text-zinc-900">
          {back}
        </div>
      </div>
    </div>
  );
}
