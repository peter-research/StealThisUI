"use client";

import {
  useId,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

import { cn } from "@/lib/cn";

export type SimpleTabItem = {
  id: string;
  label: string;
  content: ReactNode;
  disabled?: boolean;
};

export type SimpleTabsProps = Readonly<{
  items: SimpleTabItem[];
  defaultValue?: string;
  className?: string;
  onValueChange?: (id: string) => void;
}>;

// SimpleTabs — accessible roving-tabindex tabs without external deps.
export function SimpleTabs({
  items,
  defaultValue,
  className,
  onValueChange,
}: SimpleTabsProps) {
  const baseId = useId();
  const firstEnabled = items.find((item) => !item.disabled)?.id;
  const [active, setActive] = useState(defaultValue ?? firstEnabled ?? "");

  const enabledIds = items.filter((i) => !i.disabled).map((i) => i.id);

  const select = (id: string) => {
    setActive(id);
    onValueChange?.(id);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, id: string) => {
    const index = enabledIds.indexOf(id);
    if (index < 0) return;

    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      next = (index + 1) % enabledIds.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      next = (index - 1 + enabledIds.length) % enabledIds.length;
    } else if (event.key === "Home") {
      event.preventDefault();
      next = 0;
    } else if (event.key === "End") {
      event.preventDefault();
      next = enabledIds.length - 1;
    } else {
      return;
    }

    const nextId = enabledIds[next];
    select(nextId);
    document.getElementById(`${baseId}-tab-${nextId}`)?.focus();
  };

  const activeItem = items.find((item) => item.id === active);

  return (
    <div className={cn("w-full", className)} data-slot="simple-tabs">
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="flex gap-1 rounded-xl bg-neutral-100 p-1"
      >
        {items.map((item) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              id={`${baseId}-tab-${item.id}`}
              role="tab"
              type="button"
              disabled={item.disabled}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => !item.disabled && select(item.id)}
              onKeyDown={(e) => onKeyDown(e, item.id)}
              className={cn(
                "flex-1 rounded-lg px-3 py-2 text-sm font-medium outline-none transition-colors",
                "focus-visible:ring-2 focus-visible:ring-neutral-900/20",
                selected
                  ? "bg-white text-neutral-900 shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900",
                item.disabled && "cursor-not-allowed opacity-40",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {activeItem ? (
        <div
          id={`${baseId}-panel-${activeItem.id}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${activeItem.id}`}
          className="mt-3 outline-none"
        >
          {activeItem.content}
        </div>
      ) : null}
    </div>
  );
}
