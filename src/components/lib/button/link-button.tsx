import React from 'react';
import { ButtonProps } from './button';
import Link from 'next/link';

export interface LinkButtonProps extends ButtonProps {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  type = 'button',
  className = '',
  href,
  target = '_self',
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={`inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border focus:ring-4 
        border-gray-700 hover:bg-gray-700 focus:ring-gray-800 hover:scale-110 hover:transition-all ${className}`}
      role={type}
    >
      {children}
    </Link>
  );
};
