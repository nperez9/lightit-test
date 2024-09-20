import React, { useEffect } from 'react';

interface NotificationProps {
  children: React.ReactNode;
  type: 'success' | 'error';
  onClose: () => void;
}

export const Notification: React.FC<NotificationProps> = ({ children, type, onClose }) => {
  const alertStyles = {
    success: 'bg-green-100 border-green-500 text-green-700',
    error: 'bg-red-100 border-red-500 text-red-700',
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`p-4 mb-4 border-l-4 ${alertStyles[type]} fixed top-5 right-5`} // Updated classes for fixed positioning
      role="alert"
    >
      {children}
    </div>
  );
};
