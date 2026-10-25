"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

export function Trace({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="trace" className={cn("flex w-full min-w-0 flex-col gap-1", className)} {...props} />
  );
}

export function TraceLine({ className, status, children, ...props }: React.ComponentProps<"div"> & { status?: "running" | "error" | "pending" }) {
  return (
    <div data-slot="trace-line" data-status={status} className={cn("flex w-fit max-w-full min-w-0 items-center gap-2 text-sm text-muted-foreground", status === "error" && "text-destructive", status === "pending" && "opacity-60", status === "running" && "animate-pulse", className)} {...props}>
      {children}
    </div>
  );
}

export function TraceIcon({ className, children, ...props }: React.ComponentProps<"span">) {
  return <span data-slot="trace-icon" className={cn("flex shrink-0 items-center justify-center [&_svg]:size-4", className)} {...props}>{children}</span>;
}

export function TraceTitle({ className, ...props }: React.ComponentProps<"span">) {
  return <span data-slot="trace-title" className={cn("min-w-0 truncate font-medium", className)} {...props} />;
}

export function TraceDescription({ className, ...props }: React.ComponentProps<"span">) {
  return <span data-slot="trace-description" className={cn("shrink-0 text-xs text-muted-foreground/70", className)} {...props} />;
}

export function TraceCollapsible({ className, defaultOpen = false, children, ...props }: React.ComponentProps<"div"> & { defaultOpen?: boolean }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div data-slot="trace-collapsible" className={cn("flex w-full min-w-0 flex-col", className)} {...props}>
      {React.Children.map(children, (child) => React.isValidElement(child) ? React.cloneElement(child as any, { open, setOpen }) : child)}
    </div>
  );
}

export function TraceCollapsibleTrigger({ className, children, open, setOpen, ...props }: React.ComponentProps<"button"> & { open?: boolean; setOpen?: (o: boolean) => void }) {
  return (
    <button type="button" onClick={() => setOpen?.(!open)} className={cn("group flex w-fit max-w-full min-w-0 cursor-pointer items-center gap-1 text-left text-muted-foreground hover:text-foreground", className)} {...props}>
      {children}
      <ChevronRight className={cn("size-4 shrink-0 transition-transform", open && "rotate-90")} />
    </button>
  );
}

export function TraceCollapsibleContent({ className, children, open, ...props }: React.ComponentProps<"div"> & { open?: boolean }) {
  if (!open) return null;
  return <div className={cn("ml-6 mt-1 text-sm text-muted-foreground", className)} {...props}>{children}</div>;
}
