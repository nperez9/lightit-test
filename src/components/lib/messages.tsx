import React from 'react';
import { LinkButton } from './button/link-button';

export interface MessagesProps {
  title: string;
  subtitle?: string;
  code?: number;
}

export const Messages: React.FC<MessagesProps> = ({ title, subtitle, code }) => {
  return (
    <div className="w-full h-screen relative flex justify-center flex-col">
      {code && <h3 className="text-5xl font-extrabold self-center block p-8 pt-0">{code}</h3>}
      <h1 className="text-3xl self-center block p-8 pt-0">{title}</h1>
      {subtitle && <h2 className="text-2xl self-center block">{subtitle}</h2>}
      <LinkButton href="/" className=" mx-auto block mt-10">
        Go back to home
      </LinkButton>
    </div>
  );
};
