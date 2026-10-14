import type { HTMLAttributes } from "react";
type Props = HTMLAttributes<HTMLDivElement> & { label: string; value: string | number };
export function CountdownCard({ label, value, className = "", ...props }: Props) { return <div className={"rounded-xl border p-4 " + className} {...props}><p className="text-sm text-neutral-500">{label}</p><p className="mt-1 text-3xl font-semibold tabular-nums">{value}</p></div>; }
