"use client";

import React, { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface OutlinePillButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "neutral" | "danger";
  className?: string;
  children?: React.ReactNode;
}

export const OutlinePillButton = React.forwardRef<
  HTMLButtonElement,
  OutlinePillButtonProps
>(
  ({ variant = "primary", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-4",
          variant === "primary" &&
            "border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus-visible:ring-indigo-200 dark:border-indigo-300 dark:text-indigo-300 dark:hover:bg-indigo-950 dark:focus-visible:ring-indigo-700",
          variant === "neutral" &&
            "border-slate-300 text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-200 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:focus-visible:ring-slate-700",
          variant === "danger" &&
            "border-red-600 text-red-600 hover:bg-red-50 focus-visible:ring-red-200 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-950 dark:focus-visible:ring-red-800",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

OutlinePillButton.displayName = "OutlinePillButton";
