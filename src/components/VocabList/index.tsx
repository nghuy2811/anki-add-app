'use client';

import React from 'react';
import { useRecoilValue } from 'recoil';

import { vocabState } from '@/recoil/atom/vocab';

import VocabItem from '../VocabItem';

const VocabList = () => {
  const vocabData = useRecoilValue(vocabState);

  return (
    <div>
      {vocabData && vocabData.length > 0 && (
        <>
          {vocabData.map((vocab) => (
            <React.Fragment key={vocab.meta.id}>
              <VocabItem data={vocab} />
            </React.Fragment>
          ))}
        </>
      )}
    </div>
  );
};

export default VocabList;
