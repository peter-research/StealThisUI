import * as React from "react"
import { cn } from "@/lib/utils"

export interface HyperuiMarketingCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  href?: string
}

const HyperuiMarketingCard = React.forwardRef<
  HTMLDivElement,
  HyperuiMarketingCardProps
>(({ className, title, description, imageSrc, imageAlt = "", href, children, ...props }, ref) => {
  const content = (
    <>
      {imageSrc && (
        <img
          alt={imageAlt}
          src={imageSrc}
          className="h-56 w-full rounded-md object-cover"
        />
      )}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{description}</p>
        )}
        {children}
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          "block rounded-lg border border-gray-200 p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700",
          className
        )}
        ref={ref as any}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <div
      className={cn(
        "block rounded-lg border border-gray-200 p-4 shadow-sm dark:border-gray-700",
        className
      )}
      ref={ref}
      {...props}
    >
      {content}
    </div>
  )
})
HyperuiMarketingCard.displayName = "HyperuiMarketingCard"

export { HyperuiMarketingCard }
