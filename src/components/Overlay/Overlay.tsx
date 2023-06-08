import React from 'react';

type OverlayPropsType = {
  children: React.ReactNode;
};

const Overlay = ({ children }: OverlayPropsType) => {
  return (
    <div
      className='fixed inset-0 z-[99] flex items-center justify-center'
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      {children}
    </div>
  );
};

export default Overlay;
