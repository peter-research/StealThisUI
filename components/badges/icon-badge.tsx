"use client";

import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type IconBadgeTone = "purple" | "emerald" | "amber" | "red" | "blue" | "neutral";

export type IconBadgeProps = Readonly<
  {
    children: ReactNode;
    icon?: ReactNode;
    tone?: IconBadgeTone;
    outlined?: boolean;
  } & ComponentPropsWithoutRef<"span">
>;

const TONE: Record<IconBadgeTone, { solid: string; outlined: string }> = {
  purple: {
    solid: "bg-purple-100 text-purple-700 dark:bg-purple-700 dark:text-purple-100",
    outlined: "border border-purple-500 text-purple-700 dark:text-purple-100",
  },
  emerald: {
    solid: "bg-emerald-100 text-emerald-700 dark:bg-emerald-700 dark:text-emerald-100",
    outlined: "border border-emerald-500 text-emerald-700 dark:text-emerald-100",
  },
  amber: {
    solid: "bg-amber-100 text-amber-700 dark:bg-amber-700 dark:text-amber-100",
    outlined: "border border-amber-500 text-amber-700 dark:text-amber-100",
  },
  red: {
    solid: "bg-red-100 text-red-700 dark:bg-red-700 dark:text-red-100",
    outlined: "border border-red-500 text-red-700 dark:text-red-100",
  },
  blue: {
    solid: "bg-sky-100 text-sky-700 dark:bg-sky-700 dark:text-sky-100",
    outlined: "border border-sky-500 text-sky-700 dark:text-sky-100",
  },
  neutral: {
    solid: "bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100",
    outlined: "border border-neutral-400 text-neutral-700 dark:text-neutral-100",
  },
};

// IconBadge — pill badge with optional leading icon, inspired by HyperUI (MIT).
export const IconBadge = forwardRef<HTMLSpanElement, IconBadgeProps>(
  ({ className, children, icon, tone = "purple", outlined = false, ...props }, ref) => {
    const styles = TONE[tone];
    return (
      <span
        ref={ref}
        data-slot="icon-badge"
        data-tone={tone}
        data-outlined={outlined}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-sm whitespace-nowrap font-medium",
          outlined ? styles.outlined : styles.solid,
          className,
        )}
        {...props}
      >
        {icon && <span className="-ms-1 me-1.5 size-4 shrink-0">{icon}</span>}
        {children}
      </span>
    );
  },
);

IconBadge.displayName = "IconBadge";
