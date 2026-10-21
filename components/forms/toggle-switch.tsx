"use client";

import React from "react";
import { cn } from "@/lib/cn";

export interface ToggleSwitchProps
  extends React.ComponentPropsWithoutRef<"button"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: "sm" | "default";
}

export const ToggleSwitch = React.forwardRef<
  HTMLButtonElement,
  ToggleSwitchProps
>(({ className, checked = false, onCheckedChange, disabled, size = "default", ...props }, ref) => {
  const handleClick = () => {
    if (!disabled && onCheckedChange) {
      onCheckedChange(!checked);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleClick}
      ref={ref}
      className={cn(
        "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        size === "default" ? "h-6 w-11" : "h-5 w-9",
        checked ? "bg-indigo-600" : "bg-gray-200 dark:bg-gray-700",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform",
          size === "default" ? "h-5 w-5" : "h-4 w-4",
          checked
            ? size === "default"
              ? "translate-x-5"
              : "translate-x-4"
            : "translate-x-0"
        )}
      />
    </button>
  );
});

ToggleSwitch.displayName = "ToggleSwitch";
