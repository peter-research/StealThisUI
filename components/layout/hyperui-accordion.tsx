"use client"

import * as React from "react"
import { cn } from "../../lib/cn"

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  className?: string
}

export function HyperUIAccordionItem({
  title,
  children,
  className,
}: AccordionItemProps) {
  return (
    <details
      className={cn(
        "group [&_summary::-webkit-details-marker]:hidden",
        className
      )}
    >
      <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800">
        <span>{title}</span>
        <svg
          aria-hidden="true"
          className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </summary>
      <div className="p-4">
        <div className="text-gray-700 dark:text-gray-200">{children}</div>
      </div>
    </details>
  )
}

export function HyperUIAccordion({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {children}
    </div>
  )
}
