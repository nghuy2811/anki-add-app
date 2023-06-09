'use client';

import React, { useCallback, useEffect } from 'react';

type OverlayPropsType = {
  children: React.ReactNode;
  className?: string;
  shouldCloseOnEscape?: boolean;
  action?: () => void;
};

const Overlay = ({
  children,
  className,
  shouldCloseOnEscape,
  action,
}: OverlayPropsType) => {
  const handleKeyDownOverlay = useCallback(
    (e: KeyboardEvent) => {
      if (shouldCloseOnEscape && action) {
        if (e.key === 'Escape') {
          action();
        }
      }
    },
    [shouldCloseOnEscape, action]
  );

  useEffect(() => {
    document.addEventListener('keydown', (e) => handleKeyDownOverlay(e));

    return () => {
      document.removeEventListener('keydown', (e) => handleKeyDownOverlay(e));
    };
  }, [handleKeyDownOverlay]);

  return (
    <div
      className={`fixed inset-0 z-[99] flex items-center justify-center ${className}`}
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      {children}
    </div>
  );
};

export default React.memo(Overlay);
