'use client';

import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { vocabState } from '@/recoil/atom/vocab';

const VocabList = () => {
  const vocabData = useRecoilValue(vocabState);

  useEffect(() => {
    console.log(vocabData);
  }, [vocabData]);

  return <div></div>;
};

export default VocabList;
