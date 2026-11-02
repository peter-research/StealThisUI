"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface HyperuiPillButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "neutral"
  size?: "sm" | "md" | "lg"
}

const HyperuiPillButton = React.forwardRef<
  HTMLButtonElement,
  HyperuiPillButtonProps
>(({ className, variant = "primary", size = "md", children, ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full border font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-4",
        variant === "primary" &&
          "border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-200 dark:border-indigo-300 dark:bg-indigo-300 dark:text-gray-900 dark:hover:bg-indigo-200 dark:focus-visible:ring-indigo-700",
        variant === "neutral" &&
          "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700",
        size === "sm" && "px-4 py-2 text-xs",
        size === "md" && "px-6 py-3 text-sm",
        size === "lg" && "px-8 py-4 text-base",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})
HyperuiPillButton.displayName = "HyperuiPillButton"

export { HyperuiPillButton }
