import * as React from "react";
import { cn } from "@/lib/utils";

export interface StatusDotProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: "online" | "offline" | "busy" | "away";
  size?: "sm" | "md" | "lg";
}

const statusColors = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-red-500",
  away: "bg-yellow-500",
};

const sizeClasses = {
  sm: "h-2 w-2",
  md: "h-2.5 w-2.5",
  lg: "h-3 w-3",
};

export function StatusDot({
  status = "online",
  size = "md",
  className,
  ...props
}: StatusDotProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full ring-2 ring-background",
        statusColors[status],
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}
