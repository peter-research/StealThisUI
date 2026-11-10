"use client"

import * as React from "react"
import { cn } from "../../lib/cn"

interface CheckboxOption {
  id: string
  label: string
}

interface HyperUICheckboxGroupProps extends React.ComponentProps<"fieldset"> {
  options: CheckboxOption[]
  name?: string
}

export function HyperUICheckboxGroup({
  options,
  name = "checkbox-group",
  className,
  ...props
}: HyperUICheckboxGroupProps) {
  return (
    <fieldset className={cn(className)} {...props}>
      <legend className="sr-only">Checkboxes</legend>
      <div className="flex flex-col items-start gap-3">
        {options.map((option) => (
          <label
            key={option.id}
            htmlFor={option.id}
            className="inline-flex items-center gap-3"
          >
            <input
              type="checkbox"
              className="size-5 rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
              id={option.id}
              name={name}
            />
            <span className="font-medium text-gray-700 dark:text-gray-200">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
