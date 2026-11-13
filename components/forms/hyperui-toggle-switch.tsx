import React from 'react';
import { cn } from '../../lib/cn';

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  id?: string;
  className?: string;
  label?: string;
}

export function HyperUIToggleSwitch({
  checked = false,
  onChange,
  id = 'toggle-switch',
  className,
  label,
}: ToggleSwitchProps) {
  return (
    <div className="flex items-center gap-2">
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
      <label
        htmlFor={id}
        className={cn(
          'relative block h-8 w-14 rounded-full bg-gray-300 transition-colors has-checked:bg-green-500 cursor-pointer',
          className
        )}
      >
        <input
          type="checkbox"
          id={id}
          className="peer sr-only"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6" />
      </label>
    </div>
  );
}
