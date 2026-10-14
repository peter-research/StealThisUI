import React from "react";
import { cn } from "@/lib/cn";

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, title, description, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all hover:shadow-md",
          className
        )}
        {...props}
      >
        {icon && <div className="mb-4 text-primary">{icon}</div>}
        <h3 className="mb-2 text-lg font-semibold leading-none tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";
