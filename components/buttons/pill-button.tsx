import React from 'react';

interface PillButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const PillButton: React.FC<PillButtonProps> = ({
  children,
  href = '#',
  variant = 'primary',
  className = '',
}) => {
  const base =
    'inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold shadow-sm transition-colors focus-visible:ring-4 focus-visible:outline-none';
  const variants = {
    primary:
      'border-indigo-600 bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-200',
    secondary:
      'border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900 focus-visible:ring-slate-200',
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
};
