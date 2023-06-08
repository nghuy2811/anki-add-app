import React from 'react';

type OverlayPropsType = {
  children: React.ReactNode;
  className?: string;
};

const Overlay = ({ children, className }: OverlayPropsType) => {
  return (
    <div
      className={`fixed inset-0 z-[99] flex items-center justify-center ${className}`}
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      {children}
    </div>
  );
};

export default Overlay;
