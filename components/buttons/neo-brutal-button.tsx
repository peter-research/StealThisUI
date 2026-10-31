import * as React from "react";
import { cn } from "@/lib/utils";

interface NeoBrutalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function NeoBrutalButton({ className, children, ...props }: NeoBrutalButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center border-2 border-black bg-white px-6 py-3 text-sm font-semibold text-black shadow-[4px_4px_0_0] shadow-black transition-all hover:bg-yellow-200 hover:shadow-none focus:outline-none focus:ring-2 focus:ring-yellow-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
