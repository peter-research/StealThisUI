import React from "react";
import { cn } from "@/lib/cn";

export interface InfoAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  variant?: "info" | "success" | "warning" | "error";
  children: React.ReactNode;
}

export const InfoAlert = React.forwardRef<HTMLDivElement, InfoAlertProps>(
  ({ className, title, variant = "info", children, ...props }, ref) => {
    const variants = {
      info: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200",
      success: "border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200",
      warning: "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200",
      error: "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border p-4",
          variants[variant],
          className
        )}
        role="alert"
        {...props}
      >
        {title && <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>}
        <div className="text-sm [&_p]:leading-relaxed">{children}</div>
      </div>
    );
  }
);

InfoAlert.displayName = "InfoAlert";
