"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export interface HyperUIIconCTAButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
}

const HyperUIIconCTAButton = React.forwardRef<
  HTMLAnchorElement,
  HyperUIIconCTAButtonProps
>(({ className, variant = "primary", children, ...props }, ref) => {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold shadow-sm transition-colors focus-visible:ring-4 focus-visible:outline-hidden",
        variant === "primary" &&
          "border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-200 dark:border-indigo-300 dark:bg-indigo-300 dark:text-gray-900 dark:hover:bg-indigo-200 dark:focus-visible:ring-indigo-700",
        variant === "secondary" &&
          "border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus-visible:ring-indigo-200 dark:border-indigo-300 dark:text-indigo-300 dark:hover:bg-indigo-800 dark:focus-visible:ring-indigo-700",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
    </a>
  );
});
HyperUIIconCTAButton.displayName = "HyperUIIconCTAButton";

export { HyperUIIconCTAButton };
