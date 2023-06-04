'use client';

import { useState } from 'react';

import Header from '@/components/Header';
import SearchVocab from '@/components/SearchVocab';

export default function Home() {
  const [showText, setShowText] = useState(false);

  const handleChangeLayout = () => {
    setShowText(!showText);
  };

  return (
    <>
      <Header />
      <div
        className={`container relative flex min-h-[calc(100vh-70px)] flex-col pb-[20px] pt-[30px]`}
      >
        <SearchVocab />
        {showText && (
          <div className={`mt-[40px] pt-[20px]`}>
            <div className='h-[300px] bg-[red]'>Found text here</div>
          </div>
        )}
      </div>
    </>
  );
}
