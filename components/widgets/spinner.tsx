"use client"

import { cn } from "@/lib/cn"
import { Loader2 } from "lucide-react"

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
}

export function Spinner({ className, size = "md", ...props }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  }

  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn("animate-spin text-muted-foreground", sizeClasses[size], className)}
      {...props}
    >
      <Loader2 className="h-full w-full" />
    </div>
  )
}

export function SpinnerDemo() {
  return (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
    </div>
  )
}
