'use client';

import React from 'react';
import Button from '../Button';

const SearchVocab = () => {
  return (
    <div>
      <form action='' className='relative'>
        <input
          type='text'
          className='h-[40px] w-full rounded-[10px] py-[10px] pl-[10px] pr-[110px]'
        />
        <div className='absolute right-0 top-0'>
          <Button label='Search' action={() => undefined} />
        </div>
      </form>
    </div>
  );
};

export default SearchVocab;
