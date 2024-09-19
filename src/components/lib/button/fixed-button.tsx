import Link from 'next/link';
import React from 'react';

export interface AddButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const FixedButton: React.FC<AddButtonProps> = ({ href, children, className = '' }) => {
  return (
    <Link
      href={href}
      className={`border border-gray-700 hover:bg-neutral-100 hover:text-neutral-800 focus:ring-gray-800 bg-purple-800
       fixed w-12 h-12 rounded-full transition-all right-7 flex items-center justify-center 
       shadow-sm shadow-gray-700 hover:scale-125 ${className}`}
    >
      {children}
    </Link>
  );
};
