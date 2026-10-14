"use client";

import { useState, type ReactNode } from "react";

type AnnouncementBannerProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  onDismiss?: () => void;
  className?: string;
};

export function AnnouncementBanner({
  title,
  description,
  action,
  onDismiss,
  className = "",
}: AnnouncementBannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  function dismiss() {
    setVisible(false);
    onDismiss?.();
  }

  return (
    <aside
      className={`flex flex-col gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4 sm:flex-row sm:items-center sm:justify-between ${className}`}
      aria-label="Announcement"
    >
      <div className="min-w-0">
        <p className="font-semibold text-neutral-900">{title}</p>
        {description && <p className="mt-1 text-sm leading-5 text-neutral-600">{description}</p>}
      </div>
      <div className="flex shrink-0 items-center gap-3">
        {action}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="rounded-md px-2 py-1 text-sm text-neutral-500 transition hover:bg-neutral-200 hover:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
        >
          Dismiss
        </button>
      </div>
    </aside>
  );
}
