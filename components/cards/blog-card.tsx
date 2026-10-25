import * as React from "react";
import { cn } from "../../lib/cn";

interface BlogCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string;
  author: string;
  excerpt: string;
  date: string;
  readTime: string;
  avatarSrc?: string;
}

export function BlogCard({
  title,
  author,
  excerpt,
  date,
  readTime,
  avatarSrc,
  className,
  ...props
}: BlogCardProps) {
  return (
    <a
      href="#"
      className={cn(
        "block rounded-md border border-gray-300 p-4 shadow-sm transition-colors hover:bg-gray-50 sm:p-6 dark:border-gray-700 dark:hover:bg-gray-800",
        className
      )}
      {...props}
    >
      <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
        {avatarSrc && (
          <div className="sm:order-last sm:shrink-0">
            <img
              alt=""
              src={avatarSrc}
              className="size-16 rounded-full object-cover sm:size-18"
            />
          </div>
        )}
        <div className="mt-4 sm:mt-0">
          <h3 className="text-lg font-medium text-pretty text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">By {author}</p>
          <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700 dark:text-gray-300">
            {excerpt}
          </p>
        </div>
      </div>
      <dl className="mt-6 flex gap-4 lg:gap-6 text-xs text-gray-700 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <dt className="sr-only">Published on</dt>
          <dd>{date}</dd>
        </div>
        <div className="flex items-center gap-2">
          <dt className="sr-only">Reading time</dt>
          <dd>{readTime}</dd>
        </div>
      </dl>
    </a>
  );
}
