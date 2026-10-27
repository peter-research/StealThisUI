import React, { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/cn"

export interface GradientOutlineButtonProps
  extends ComponentPropsWithoutRef<"button"> {
  className?: string
  children?: React.ReactNode
}

export const GradientOutlineButton = React.forwardRef<
  HTMLButtonElement,
  GradientOutlineButtonProps
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "relative inline-flex items-center justify-center rounded-full p-[1px] text-sm font-semibold shadow-sm transition-all focus-visible:outline-none focus-visible:ring-4",
        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
        "hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600",
        "focus-visible:ring-purple-200 dark:focus-visible:ring-purple-800",
        className
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-slate-900 dark:bg-gray-950 dark:text-white">
        {children}
      </span>
    </button>
  )
})

GradientOutlineButton.displayName = "GradientOutlineButton"
