"use client";

import {
  forwardRef,
  useId,
  type ComponentPropsWithoutRef,
} from "react";

import { cn } from "@/lib/cn";

export type FloatingLabelInputProps = Readonly<
  {
    label: string;
    error?: string;
  } & Omit<ComponentPropsWithoutRef<"input">, "placeholder">
>;

// FloatingLabelInput — material-style floating label with error support.
// Accessible: label is always associated via htmlFor / id.
export const FloatingLabelInput = forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ className, label, error, id, disabled, ...props }, ref) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = error ? `${inputId}-error` : undefined;

  return (
    <div className={cn("relative w-full", className)} data-slot="floating-label-input">
      <input
        ref={ref}
        id={inputId}
        disabled={disabled}
        placeholder=" "
        aria-invalid={error ? true : undefined}
        aria-describedby={errorId}
        className={cn(
          "peer block w-full appearance-none rounded-xl border bg-transparent",
          "px-3.5 pb-2.5 pt-5 text-sm text-neutral-900 outline-none",
          "border-neutral-300 transition-[border-color,box-shadow] duration-200",
          "focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-red-500 focus:border-red-600 focus:ring-red-500/15",
        )}
        {...props}
      />
      <label
        htmlFor={inputId}
        className={cn(
          "pointer-events-none absolute start-3.5 top-1/2 z-10 origin-[0] -translate-y-1/2",
          "bg-white px-1 text-sm text-neutral-500 transition-all duration-200",
          "peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:scale-90 peer-focus:text-neutral-900",
          "peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:-translate-y-0",
          "peer-[:not(:placeholder-shown)]:scale-90",
          error && "peer-focus:text-red-600",
        )}
      >
        {label}
      </label>
      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
});

FloatingLabelInput.displayName = "FloatingLabelInput";
