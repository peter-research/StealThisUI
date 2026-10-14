import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { liked?: boolean };

export function LikeButton({ liked = false, className = "", children, ...props }: Props) {
  return <button type="button" aria-pressed={liked} className={"inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition " + (liked ? "border-rose-300 bg-rose-50 text-rose-700 " : "border-neutral-300 text-neutral-700 hover:bg-neutral-50 ") + className} {...props}>
    <span aria-hidden="true">{liked ? "♥" : "♡"}</span>{children ?? (liked ? "Liked" : "Like")}
  </button>;
}
