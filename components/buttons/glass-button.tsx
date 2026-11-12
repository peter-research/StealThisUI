"use client";

import React from "react";
import { cn } from "../../lib/cn";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "primary" | "danger";
}

export function GlassButton({
  children,
  className,
  variant = "default",
  ...props
}: GlassButtonProps) {
  return (
    <button
      className={cn(
        "relative overflow-hidden rounded-xl px-6 py-3 font-medium text-white backdrop-blur-md transition-all duration-300",
        "border border-white/20 bg-white/10 shadow-lg hover:bg-white/20 hover:shadow-xl active:scale-95",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50",
        variant === "primary" && "bg-blue-500/20 border-blue-400/30 hover:bg-blue-500/30",
        variant === "danger" && "bg-red-500/20 border-red-400/30 hover:bg-red-500/30",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* Subtle shine effect */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </button>
  );
}
