import React from "react"
import { cn } from "@/lib/cn"

export interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  glowColor?: string
}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, glowColor = "rgba(59, 130, 246, 0.5)", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white transition-all",
          "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:shadow-xl",
          "before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-r before:from-blue-500 before:to-purple-600 before:opacity-75 before:blur-md before:transition-all",
          "hover:before:opacity-100 hover:before:blur-lg",
          className
        )}
        style={{ "--glow": glowColor } as React.CSSProperties}
        {...props}
      >
        {children}
      </button>
    )
  }
)
GlowButton.displayName = "GlowButton"
