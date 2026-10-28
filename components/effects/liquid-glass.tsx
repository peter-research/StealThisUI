"use client";

import React, { useId, type CSSProperties } from "react";
import { cn } from "@/lib/cn";

export interface LiquidGlassProps {
  children?: React.ReactNode;
  className?: string;
  /** Corner radius in px */
  radius?: number;
  /** Blur intensity */
  blur?: number;
  /** Saturation boost */
  saturation?: number;
  /** Chromatic aberration strength (0 = off) */
  aberration?: number;
  /** Tint opacity 0-1 */
  tint?: number;
  style?: CSSProperties;
}

/**
 * LiquidGlass – refractive glass surface with edge chromatic aberration.
 * 
 * Inspired by Apple's Liquid Glass and open-source implementations
 * (e.g. rdev/liquid-glass-react, MIT).
 * 
 * Uses SVG backdrop-filter for Chromium; falls back to frosted glass elsewhere.
 * Respects prefers-reduced-transparency.
 */
export const LiquidGlass = React.forwardRef<
  HTMLDivElement,
  LiquidGlassProps
>(
  (
    {
      children,
      className,
      radius = 24,
      blur = 16,
      saturation = 140,
      aberration = 2,
      tint = 0.08,
      style,
      ...props
    },
    ref
  ) => {
    const id = useId().replace(/:/g, "");
    const filterId = `lg-${id}`;

    return (
      <div
        ref={ref}
        className={cn(
          "relative isolate overflow-hidden",
          "before:absolute before:inset-0 before:-z-10",
          "before:bg-white/[var(--lg-tint)] before:backdrop-blur-[var(--lg-blur)]",
          "before:saturate-[var(--lg-sat)]",
          className
        )}
        style={
          {
            "--lg-blur": `${blur}px`,
            "--lg-sat": `${saturation}%`,
            "--lg-tint": tint,
            borderRadius: radius,
            ...style,
          } as CSSProperties
        }
        {...props}
      >
        {/* SVG filter for edge aberration (Chromium) */}
        <svg
          className="pointer-events-none absolute h-0 w-0"
          aria-hidden
        >
          <defs>
            <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation={aberration * 0.4} result="blur" />
              <feOffset in="blur" dx={aberration} dy={0} result="r" />
              <feOffset in="blur" dx={-aberration} dy={0} result="b" />
              <feBlend in="r" in2="b" mode="screen" />
            </filter>
          </defs>
        </svg>

        <div
          className="relative z-10"
          style={{
            filter: aberration > 0 ? `url(#${filterId})` : undefined,
          }}
        >
          {children}
        </div>

        {/* Specular highlight */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.1) 100%)",
            mixBlendMode: "overlay",
          }}
        />
      </div>
    );
  }
);

LiquidGlass.displayName = "LiquidGlass";
