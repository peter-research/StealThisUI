"use client";

import { cn } from "@/lib/cn";
import { Loader2 } from "lucide-react";

export interface SpinnerProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "size-3",
  md: "size-4",
  lg: "size-6",
};

export const Spinner = ({ className, size = "md", ...props }: SpinnerProps) => {
  return (
    <Loader2
      role="status"
      aria-label="Loading"
      className={cn("animate-spin text-current", sizeMap[size], className)}
      {...props}
    />
  );
};

Spinner.displayName = "Spinner";
