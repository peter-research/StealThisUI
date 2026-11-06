import React from "react"
import { cn } from "@/lib/utils"

interface DividerProps {
  orientation?: "horizontal" | "vertical"
  className?: string
  label?: string
}

export function Divider({
  orientation = "horizontal",
  className,
  label,
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        className={cn("h-full w-px bg-border", className)}
        role="separator"
        aria-orientation="vertical"
      />
    )
  }

  return (
    <div
      className={cn("flex items-center gap-2 w-full", className)}
      role="separator"
    >
      <div className="flex-1 h-px bg-border" />
      {label && (
        <span className="text-xs text-muted-foreground px-2">{label}</span>
      )}
      <div className="flex-1 h-px bg-border" />
    </div>
  )
}
