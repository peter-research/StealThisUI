"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/cn";

export function CodeBlock({ className, variant = "default", size = "default", ...props }: React.ComponentProps<"div"> & { variant?: "default" | "destructive"; size?: "default" | "sm" }) {
  return (
    <div data-slot="code-block" data-variant={variant} data-size={size} className={cn("relative flex w-full min-w-0 flex-col overflow-hidden rounded-lg border bg-muted/30", variant === "destructive" && "border-destructive/50", size === "sm" && "text-xs", className)} {...props} />
  );
}

export function CodeBlockHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="code-block-header" className={cn("flex min-w-0 shrink-0 items-center border-b bg-muted/50 px-3 py-1.5", className)} {...props} />;
}

export function CodeBlockTitle({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="code-block-title" className={cn("min-w-0 truncate text-sm font-medium", className)} {...props} />;
}

export function CodeBlockActions({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="code-block-actions" className={cn("ms-auto flex shrink-0 items-center gap-1", className)} {...props} />;
}

export function CodeBlockCopyButton({ value, className, ...props }: React.ComponentProps<"button"> & { value: string }) {
  const [copied, setCopied] = React.useState(false);
  React.useEffect(() => { if (!copied) return; const t = setTimeout(() => setCopied(false), 2000); return () => clearTimeout(t); }, [copied]);
  return (
    <button type="button" aria-label={copied ? "Copied" : "Copy"} className={cn("inline-flex size-7 items-center justify-center rounded-md hover:bg-muted", className)} onClick={() => navigator.clipboard.writeText(value).then(() => setCopied(true)).catch(() => {})} {...props}>
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </button>
  );
}

export function CodeBlockContent({ className, children, wrap = false, ...props }: React.ComponentProps<"pre"> & { wrap?: boolean }) {
  return (
    <pre data-slot="code-block-content" dir="ltr" tabIndex={0} className={cn("min-h-0 min-w-0 overflow-auto p-3 font-mono text-sm outline-none", wrap && "whitespace-pre-wrap", className)} {...props}>
      <code>{children}</code>
    </pre>
  );
}

export function CodeBlockFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="code-block-footer" className={cn("flex min-w-0 shrink-0 items-center border-t px-3 py-1.5 text-xs text-muted-foreground", className)} {...props} />;
}
