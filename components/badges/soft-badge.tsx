import React from "react"

import { cn } from "@/lib/cn"

export interface SoftBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error"
  children?: React.ReactNode
}

export function SoftBadge({
  variant = "default",
  className,
  children,
  ...props
}: SoftBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "default" &&
          "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
        variant === "success" &&
          "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200",
        variant === "warning" &&
          "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200",
        variant === "error" &&
          "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-200",
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
