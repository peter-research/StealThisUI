"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

export type ShimmerButtonSize = "sm" | "md" | "lg";

export type ShimmerButtonProps = Readonly<
  {
    children: ReactNode;
    size?: ShimmerButtonSize;
    /** Accent color for the shimmer highlight */
    shimmerColor?: string;
  } & ComponentPropsWithoutRef<"button">
>;

const SIZE: Record<ShimmerButtonSize, string> = {
  sm: "h-9 gap-1.5 rounded-xl px-3.5 text-xs",
  md: "h-10 gap-2 rounded-xl px-4 text-sm",
  lg: "h-12 gap-2 rounded-2xl px-5 text-sm",
};

// ShimmerButton — dark primary button with a continuous light sweep.
// Pure CSS animation (no styled-jsx / framer-motion).
export const ShimmerButton = forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      className,
      children,
      size = "md",
      type = "button",
      disabled,
      shimmerColor = "rgba(255,255,255,0.35)",
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <>
        <style>{`
          @keyframes stealthisui-shimmer-sweep {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
        <button
          ref={ref}
          type={type}
          disabled={disabled}
          data-slot="shimmer-button"
          data-size={size}
          style={
            {
              "--shimmer-color": shimmerColor,
              ...style,
            } as CSSProperties
          }
          className={cn(
            "relative inline-flex cursor-pointer items-center justify-center overflow-hidden",
            "bg-neutral-900 font-sans font-semibold text-white outline-none select-none",
            "transition-[transform,opacity,background-color] duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]",
            "hover:bg-neutral-800 active:scale-[0.98]",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900",
            "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40",
            "motion-reduce:transition-none",
            SIZE[size],
            className,
          )}
          {...props}
        >
          <span
            aria-hidden
            className={cn(
              "pointer-events-none absolute inset-0",
              "bg-gradient-to-r from-transparent via-[var(--shimmer-color)] to-transparent",
              "motion-reduce:hidden",
            )}
            style={{
              animation:
                "stealthisui-shimmer-sweep 2.2s ease-in-out infinite",
            }}
          />
          <span className="relative z-10">{children}</span>
        </button>
      </>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";
