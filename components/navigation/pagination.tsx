import React from 'react';

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage = 2,
  totalPages = 4,
  onPageChange,
  className = '',
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className={className}>
      <ul className="flex justify-center gap-1 text-gray-900 dark:text-white">
        <li>
          <button
            type="button"
            onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
            className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 dark:border-gray-700 dark:hover:bg-gray-800"
            aria-label="Previous page"
            disabled={currentPage === 1}
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>

        {pages.map((page) => (
          <li key={page}>
            {page === currentPage ? (
              <span
                className="block size-8 rounded border border-indigo-600 bg-indigo-600 text-center text-sm/8 font-medium text-white"
                aria-current="page"
              >
                {page}
              </span>
            ) : (
              <button
                type="button"
                onClick={() => onPageChange?.(page)}
                className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                {page}
              </button>
            )}
          </li>
        ))}

        <li>
          <button
            type="button"
            onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
            className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180 dark:border-gray-700 dark:hover:bg-gray-800"
            aria-label="Next page"
            disabled={currentPage === totalPages}
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
}
