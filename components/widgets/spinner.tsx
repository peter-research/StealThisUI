import { cn } from "../../lib/cn";
import { Loader2 } from "lucide-react";

export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export function Spinner({
  className,
  size = 16,
  ...props
}: SpinnerProps) {
  return (
    <Loader2
      role="status"
      aria-label="Loading"
      className={cn("animate-spin", className)}
      size={size}
      {...props}
    />
  );
}
