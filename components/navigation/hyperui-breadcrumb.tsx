"use client"

import React from "react"
import { cn } from "@/lib/utils" // assuming standard utils; adjust if needed

interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

interface HyperuiBreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function HyperuiBreadcrumb({ items, className }: HyperuiBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex", className)}>
      <ol className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-200">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <li>
              {item.href ? (
                <a
                  href={item.href}
                  className="block transition-colors hover:text-gray-900 dark:hover:text-white"
                  aria-label={item.label === "Home" ? "Home" : undefined}
                >
                  {item.icon || item.label}
                </a>
              ) : (
                <span className="block text-gray-900 dark:text-white">{item.label}</span>
              )}
            </li>
            {index < items.length - 1 && (
              <li className="rtl:rotate-180" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}

export default HyperuiBreadcrumb
