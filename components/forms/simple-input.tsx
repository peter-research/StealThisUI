"use client";

import React, { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface SimpleInputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string;
  className?: string;
}

export const SimpleInput = React.forwardRef<HTMLInputElement, SimpleInputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || props.name || "simple-input";
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500 dark:focus:border-indigo-400",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className,
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-600 dark:text-red-400">{error}</p>}
      </div>
    );
  },
);

SimpleInput.displayName = "SimpleInput";
