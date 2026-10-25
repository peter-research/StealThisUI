import * as React from "react";
import { cn } from "../../lib/cn";

interface SimpleFeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function SimpleFeatureCard({
  title,
  description,
  icon,
  className,
  ...props
}: SimpleFeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900",
        className
      )}
      {...props}
    >
      {icon && <div className="mb-4 text-indigo-600 dark:text-indigo-400">{icon}</div>}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
