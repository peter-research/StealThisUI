"use client";

import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export type RemovableBadgeTone = "purple" | "emerald" | "amber" | "red" | "blue" | "neutral";

export type RemovableBadgeProps = Readonly<
  {
    children: ReactNode;
    tone?: RemovableBadgeTone;
    outlined?: boolean;
    onRemove?: () => void;
  } & ComponentPropsWithoutRef<"span">
>;

const TONE: Record<RemovableBadgeTone, { solid: string; outlined: string; button: string }> = {
  purple: {
    solid: "bg-purple-100 text-purple-700 dark:bg-purple-700 dark:text-purple-100",
    outlined: "border border-purple-500 text-purple-700 dark:text-purple-100",
    button: "bg-purple-200 text-purple-700 hover:bg-purple-300 dark:bg-purple-800 dark:text-purple-100 dark:hover:bg-purple-900",
  },
  emerald: {
    solid: "bg-emerald-100 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100",
    outlined: "border border-emerald-500 text-emerald-700 dark:text-emerald-100",
    button: "bg-emerald-200 text-emerald-700 hover:bg-emerald-300 dark:bg-emerald-800 dark:text-emerald-100 dark:hover:bg-emerald-900",
  },
  amber: {
    solid: "bg-amber-100 text-amber-700 dark:bg-amber-700 dark:text-amber-100",
    outlined: "border border-amber-500 text-amber-700 dark:text-amber-100",
    button: "bg-amber-200 text-amber-700 hover:bg-amber-300 dark:bg-amber-800 dark:text-amber-100 dark:hover:bg-amber-900",
  },
  red: {
    solid: "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100",
    outlined: "border border-red-500 text-red-700 dark:text-red-100",
    button: "bg-red-200 text-red-700 hover:bg-red-300 dark:bg-red-800 dark:text-red-100 dark:hover:bg-red-900",
  },
  blue: {
    solid: "bg-sky-100 text-sky-700 dark:bg-sky-700 dark:text-sky-100",
    outlined: "border border-sky-500 text-sky-700 dark:text-sky-100",
    button: "bg-sky-200 text-sky-700 hover:bg-sky-300 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-900",
  },
  neutral: {
    solid: "bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100",
    outlined: "border border-neutral-400 text-neutral-700 dark:text-neutral-100",
    button: "bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-900",
  },
};

// RemovableBadge — pill badge with optional close button, inspired by HyperUI (MIT).
export const RemovableBadge = forwardRef<HTMLSpanElement, RemovableBadgeProps>(
  ({ className, children, tone = "purple", outlined = false, onRemove, ...props }, ref) => {
    const styles = TONE[tone];
    return (
      <span
        ref={ref}
        data-slot="removable-badge"
        data-tone={tone}
        data-outlined={outlined}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-sm whitespace-nowrap font-medium",
          outlined ? styles.outlined : styles.solid,
          className,
        )}
        {...props}
      >
        {children}
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className={cn(
              "ms-1.5 -me-1 inline-block rounded-full p-0.5 transition",
              styles.button,
            )}
            aria-label="Remove badge"
          >
            <X className="size-3" />
          </button>
        )}
      </span>
    );
  },
);

RemovableBadge.displayName = "RemovableBadge";
