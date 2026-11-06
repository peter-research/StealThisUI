"use client"

import React, { useState } from "react"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating?: number
  max?: number
  onChange?: (rating: number) => void
  size?: number
  className?: string
  interactive?: boolean
}

export function StarRating({
  rating = 0,
  max = 5,
  onChange,
  size = 20,
  className,
  interactive = true,
}: StarRatingProps) {
  const [hover, setHover] = useState(0)

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: max }).map((_, i) => {
        const value = i + 1
        const filled = value <= (hover || rating)
        return (
          <button
            key={value}
            type="button"
            disabled={!interactive}
            onClick={() => interactive && onChange?.(value)}
            onMouseEnter={() => interactive && setHover(value)}
            onMouseLeave={() => interactive && setHover(0)}
            className="focus:outline-none disabled:cursor-default"
          >
            <Star
              size={size}
              className={cn(
                "transition-colors",
                filled ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              )}
            />
          </button>
        )
      })}
    </div>
  )
}
