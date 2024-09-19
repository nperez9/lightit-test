import React from 'react';

export interface ErrorTextProps {
  children: React.ReactNode;
}

export const ErrorText: React.FC<ErrorTextProps> = ({ children }) => {
  return <span className="block w-full text-red-600 italic text-sm transition-all p-2">{children}</span>;
};
