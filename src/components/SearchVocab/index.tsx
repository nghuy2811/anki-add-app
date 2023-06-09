'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { toast } from 'react-toastify';

import Button from '../Button';

import SearchVocabService from '@/services/searchVocabService';
import { vocabState } from '@/recoil/atom/vocab';
import { loadingState } from '@/recoil/atom/loading';

const SearchVocab = () => {
  const [keyword, setKeyword] = useState('');
  const [vocabData, setVocabData] = useRecoilState(vocabState);
  const setLoading = useSetRecoilState(loadingState);

  const handleSearch = useCallback(async () => {
    setLoading(true);
    SearchVocabService.searchVocab(keyword)
      .then((data) => {
        if (typeof data === 'string') {
          toast.error(data);
          return;
        }

        setVocabData(data);
      })
      .catch((err) => {
        if (err.message) return toast.error(err.message);
        return toast.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [keyword, setVocabData, setLoading]);

  useEffect(() => {
    if (!keyword && vocabData !== null) {
      setVocabData(null);
    }
  }, [keyword, vocabData, setVocabData]);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className='relative'
      >
        <input
          type='text'
          className='h-[40px] w-full rounded-[10px] py-[10px] pl-[10px] pr-[110px]'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div className='absolute right-0 top-0'>
          <Button
            type='submit'
            label='Search'
            action={handleSearch}
            disable={!Boolean(keyword)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchVocab;
