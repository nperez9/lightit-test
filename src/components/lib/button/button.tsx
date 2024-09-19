'use client';
import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onclick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  className = '',
  onclick = () => {},
  variant = 'primary',
  disabled = false,
}) => {
  return (
    <button
      onClick={onclick}
      className={`inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ${className}`}
      role={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
