import React from "react"
import { cn } from "@/lib/cn"

export interface SimpleSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
}

export const SimpleSpinner = React.forwardRef<
  HTMLDivElement,
  SimpleSpinnerProps
>(({ className, size = "md", ...props }, ref) => {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-4",
  }
  return (
    <div
      ref={ref}
      className={cn(
        "animate-spin rounded-full border-primary border-t-transparent",
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
      {...props}
    />
  )
})

SimpleSpinner.displayName = "SimpleSpinner"
