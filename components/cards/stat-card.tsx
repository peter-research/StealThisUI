type StatCardProps = {
  label: string;
  value: string | number;
  change?: string;
  detail?: string;
  className?: string;
};

export function StatCard({
  label,
  value,
  change,
  detail,
  className = "",
}: StatCardProps) {
  return (
    <article className={`rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm ${className}`}>
      <p className="text-sm font-medium text-neutral-500">{label}</p>
      <div className="mt-2 flex flex-wrap items-baseline gap-2">
        <p className="text-3xl font-semibold tracking-tight text-neutral-950">{value}</p>
        {change && (
          <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-700">
            {change}
          </span>
        )}
      </div>
      {detail && <p className="mt-2 text-sm text-neutral-500">{detail}</p>}
    </article>
  );
}
