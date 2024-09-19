import React from 'react';

export interface MainTitleProps {
  children: React.ReactNode;
}

export const MainTitle: React.FC<MainTitleProps> = ({ children }) => {
  return <h1 className="m-6 text-4xl font-extrabold tracking-tight md:text-5xl">{children}</h1>;
};
