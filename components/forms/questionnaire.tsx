"use client"

import * as React from "react"
import { cn } from "@/lib/cn"

export interface QuestionnaireItem {
  name: string
  prompt: string
  description?: string
  required?: boolean
  choices?: { value: string; label: string; description?: string }[]
  input?: { label?: string; placeholder?: string }
}

export function Questionnaire({
  items,
  onSubmit,
  className,
  ...props
}: React.ComponentProps<"form"> & {
  items: QuestionnaireItem[]
  onSubmit?: (data: Record<string, string | string[]>) => void
}) {
  const [step, setStep] = React.useState(0)
  const [answers, setAnswers] = React.useState<Record<string, string | string[]>>({})

  const current = items[step]
  const isLast = step === items.length - 1

  function handleNext() {
    if (isLast) {
      onSubmit?.(answers)
    } else {
      setStep((s) => s + 1)
    }
  }

  function handlePrev() {
    setStep((s) => Math.max(0, s - 1))
  }

  function setAnswer(name: string, value: string | string[]) {
    setAnswers((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <form
      data-slot="questionnaire"
      className={cn("flex w-full min-w-0 flex-col gap-4", className)}
      onSubmit={(e) => {
        e.preventDefault()
        handleNext()
      }}
      {...props}
    >
      <div className="text-xs font-medium text-muted-foreground tabular-nums">
        Question {step + 1} of {items.length}
      </div>

      {current && (
        <div className="flex min-w-0 flex-col gap-4">
          <div className="text-base font-medium text-pretty">{current.prompt}</div>
          {current.description && (
            <div className="text-sm text-muted-foreground">{current.description}</div>
          )}

          {current.choices && (
            <div className="grid min-w-0 gap-2">
              {current.choices.map((choice) => {
                const selected = answers[current.name] === choice.value
                return (
                  <label
                    key={choice.value}
                    className={cn(
                      "relative flex min-h-11 cursor-pointer items-start gap-2.5 rounded-lg border px-3 py-2.5 text-start text-sm transition-colors",
                      selected
                        ? "border-primary/40 bg-muted"
                        : "border-input hover:bg-muted/50"
                    )}
                  >
                    <input
                      type="radio"
                      name={current.name}
                      value={choice.value}
                      className="sr-only"
                      checked={selected}
                      onChange={() => setAnswer(current.name, choice.value)}
                    />
                    <span
                      className={cn(
                        "flex size-4 shrink-0 items-center justify-center rounded-full border",
                        selected ? "border-primary bg-primary" : "border-input"
                      )}
                    >
                      {selected && <span className="size-2 rounded-full bg-primary-foreground" />}
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-0.5 leading-snug">
                      {choice.label}
                      {choice.description && (
                        <span className="text-muted-foreground">{choice.description}</span>
                      )}
                    </span>
                  </label>
                )
              })}
            </div>
          )}

          {current.input && (
            <input
              className="h-11 w-full rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              placeholder={current.input.placeholder}
              value={(answers[current.name] as string) || ""}
              onChange={(e) => setAnswer(current.name, e.target.value)}
            />
          )}
        </div>
      )}

      <div className="flex items-center gap-2">
        {step > 0 && (
          <button
            type="button"
            onClick={handlePrev}
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium hover:bg-muted"
          >
            Previous
          </button>
        )}
        <button
          type="submit"
          className="ml-auto inline-flex h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          {isLast ? "Submit" : "Next"}
        </button>
      </div>
    </form>
  )
}
