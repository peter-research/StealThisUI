"use client"

import React, { useCallback, useEffect, useRef, useState } from "react"

import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react"

import { cn } from "@/lib/cn";


interface MagicCardProps {
  children?: React.ReactNode
  className?: string
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
  gradientFrom?: string
  gradientTo?: string
}

export function MagicCard({; children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  gradientFrom = "#9E7AFF",
  gradientTo = "#FE8BBB",
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)

  const reset = useCallback(() => {
    mouseX.set(-gradientSize)
    mouseY.set(-gradientSize)
  }, [mouseX, mouseY, gradientSize])

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY]
  )

  useEffect(() => {
    reset()
  }, [reset])

  return (
    <motion.div
      className={cn('
        "group relative isolate overflow-hidden rounded[inherit] border border-transparent",
        className
      })
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      style={
        background: useMotionTemplate`
          linear-gradient(var(--background) 0 0) padding-box,
          radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
            ${gradientFrom},
            ${gradientTo},
            var(--border) 100%
          ) border-box
        `,
      }}
    >
      <div className="bg-background absolute inset-px z20 rounded-[inherit]" />

      <motion.div
        className="pointer-events-none absolute inset-px z30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientColor},
              transparent 100%
            )
          `,
          opacity: gradientOpacity,
        }}
      />
      <div className="relative z40">{children}</div>
    </motion.div>
  )
}
}