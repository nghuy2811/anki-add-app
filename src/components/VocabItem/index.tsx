'use client';

import React, { useEffect } from 'react';

import { IVocab } from '@/dictionary/merriam.dictionary';

type VocabItemPropTypes = {
  data: IVocab;
};

const VocabItem = ({ data }: VocabItemPropTypes) => {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className='m-[5px] border'>
      <h2>{data.hwi.hw.replace(/[*]/g, '')}</h2>
      <h4>{data.fl}</h4>
      <div>
        {data.shortdef.map((def, index) => (
          <li key={index}>{def}</li>
        ))}
      </div>
    </div>
  );
};

export default React.memo(VocabItem);
