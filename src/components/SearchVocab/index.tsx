'use client';

import React, { useState, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import Button from '../Button';

import SearchVocabService from '@/services/searchVocabService';
import { vocabState } from '@/recoil/atom/vocab';
import { loadingState } from '@/recoil/atom/loading';

const SearchVocab = () => {
  const [keyword, setKeyword] = useState('');
  const setVocabData = useSetRecoilState(vocabState);
  const setLoading = useSetRecoilState(loadingState);

  const handleSearch = useCallback(async () => {
    setLoading(true);
    SearchVocabService.searchVocab(keyword)
      .then((data) => {
        setVocabData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [keyword, setVocabData, setLoading]);

  return (
    <div>
      <form action='' className='relative'>
        <input
          type='text'
          className='h-[40px] w-full rounded-[10px] py-[10px] pl-[10px] pr-[110px]'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div className='absolute right-0 top-0'>
          <Button label='Search' action={handleSearch} />
        </div>
      </form>
    </div>
  );
};

export default SearchVocab;
