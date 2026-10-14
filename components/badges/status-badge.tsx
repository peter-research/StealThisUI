"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

export type StatusBadgeTone =
  | "neutral"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type StatusBadgeProps = Readonly<
  {
    children: ReactNode;
    tone?: StatusBadgeTone;
    /** Show a small status dot */
    withDot?: boolean;
  } & ComponentPropsWithoutRef<"span">
>;

const TONE: Record<StatusBadgeTone, string> = {
  neutral: "bg-neutral-100 text-neutral-700 ring-neutral-200",
  success: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  warning: "bg-amber-50 text-amber-900 ring-amber-200",
  danger: "bg-red-50 text-red-800 ring-red-200",
  info: "bg-sky-50 text-sky-800 ring-sky-200",
};

const DOT: Record<StatusBadgeTone, string> = {
  neutral: "bg-neutral-400",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-red-500",
  info: "bg-sky-500",
};

// StatusBadge — compact pill badge with optional live dot.
export const StatusBadge = forwardRef<HTMLSpanElement, StatusBadgeProps>(
  (
    {
      className,
      children,
      tone = "neutral",
      withDot = false,
      ...props
    },
    ref,
  ) => {
    return (
      <span
        ref={ref}
        data-slot="status-badge"
        data-tone={tone}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5",
          "text-xs font-medium ring-1 ring-inset",
          TONE[tone],
          className,
        )}
        {...props}
      >
        {withDot ? (
          <span
            aria-hidden
            className={cn("size-1.5 shrink-0 rounded-full", DOT[tone])}
          />
        ) : null}
        {children}
      </span>
    );
  },
);

StatusBadge.displayName = "StatusBadge";
