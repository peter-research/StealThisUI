import React, { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/cn"

export interface PillButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: "primary" | "secondary"
  className?: string
  children?: React.ReactNode
}

export const PillButton = React.forwardRef<
  HTMLAnchorElement,
  PillButtonProps
>(
  (
    {
      variant = "primary",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <a
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-4",
          variant === "primary"
            ? "border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-200 dark:border-indigo-300 dark:bg-indigo-300 dark:text-gray-900 dark:hover:bg-indigo-200 dark:focus-visible:ring-indigo-700"
            : "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 focus-visible:ring-slate-200 dark:border-slate-600 dark:bg-gray-900 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus-visible:ring-slate-700",
          className
        )}
        {...props}
      >
        {children}
      </a>
    )
  }
)

PillButton.displayName = "PillButton"
