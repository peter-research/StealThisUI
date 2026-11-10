"use client"

import * as React from "react"
import { cn } from "../../lib/cn"

interface RadioOption {
  id: string
  label: string
  value: string
}

interface HyperUIRadioGroupProps extends React.ComponentProps<"fieldset"> {
  options: RadioOption[]
  name: string
  defaultValue?: string
}

export function HyperUIRadioGroup({
  options,
  name,
  defaultValue,
  className,
  ...props
}: HyperUIRadioGroupProps) {
  return (
    <fieldset className={cn(className)} {...props}>
      <legend className="sr-only">Radio group</legend>
      <div className="flex flex-col items-start gap-3">
        {options.map((option) => (
          <label
            key={option.id}
            htmlFor={option.id}
            className="inline-flex items-center gap-3"
          >
            <input
              type="radio"
              className="size-5 border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:ring-offset-gray-900 dark:checked:bg-blue-600"
              id={option.id}
              name={name}
              value={option.value}
              defaultChecked={defaultValue === option.value}
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
