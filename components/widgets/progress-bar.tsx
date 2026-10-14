import type { CSSProperties } from "react";

type ProgressBarProps = {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  className?: string;
};

export function ProgressBar({
  value,
  max = 100,
  label = "Progress",
  showValue = true,
  className = "",
}: ProgressBarProps) {
  const safeMax = Number.isFinite(max) && max > 0 ? max : 100;
  const safeValue = Number.isFinite(value) ? Math.min(safeMax, Math.max(0, value)) : 0;
  const percent = Math.round((safeValue / safeMax) * 100);
  const style = { "--progress-value": percent + "%" } as CSSProperties;

  return (
    <div className={className}>
      <div className="mb-2 flex items-center justify-between gap-3 text-sm">
        <span>{label}</span>
        {showValue && <span className="tabular-nums text-neutral-500">{percent}%</span>}
      </div>
      <div
        className="h-2 overflow-hidden rounded-full bg-neutral-200"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
      >
        <div
          className="h-full rounded-full bg-neutral-900 transition-[width] duration-300"
          style={{ width: "var(--progress-value)", ...style }}
        />
      </div>
    </div>
  );
}
