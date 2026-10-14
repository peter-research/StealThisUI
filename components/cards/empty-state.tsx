import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export function EmptyState({
  title,
  description,
  action,
  icon,
  className = "",
}: EmptyStateProps) {
  return (
    <section
      className={`flex min-h-56 flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 px-6 py-10 text-center ${className}`}
      aria-labelledby="empty-state-title"
    >
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
          {icon}
        </div>
      )}
      <h2 id="empty-state-title" className="text-lg font-semibold text-neutral-900">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-md text-sm leading-6 text-neutral-600">{description}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </section>
  );
}
