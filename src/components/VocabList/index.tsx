'use client';

import React from 'react';
import { useRecoilValue } from 'recoil';

import { vocabState } from '@/recoil/atom/vocab';

import VocabItemWrapper from '../VocabItemWrapper';

const VocabList = () => {
  const vocabData = useRecoilValue(vocabState);

  return (
    <div>
      {vocabData && (
        <>
          {vocabData.length > 0 ? (
            <>
              {vocabData.map((vocab, vocabIndex) => (
                <React.Fragment key={vocab.meta?.id || vocabIndex}>
                  <VocabItemWrapper data={vocab} />
                </React.Fragment>
              ))}
            </>
          ) : (
            <h3 className='mt-[30px] text-center text-[26px] leading-[30px]'>
              No result! Try again.
            </h3>
          )}
        </>
      )}
    </div>
  );
};

export default VocabList;
