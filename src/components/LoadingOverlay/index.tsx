'use client';

import React from 'react';
import { useRecoilValue } from 'recoil';

import { loadingState } from '@/recoil/atom/loading';

import LoadingIcon from '../LoadingIcon';

const LoadingOverlay = () => {
  const isLoading = useRecoilValue(loadingState);

  return (
    <>
      {isLoading && (
        <div
          className='fixed inset-0 z-[99] flex items-center justify-center'
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <LoadingIcon />
        </div>
      )}
    </>
  );
};

export default LoadingOverlay;
