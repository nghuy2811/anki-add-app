'use client';

import React, { useCallback, useMemo } from 'react';

import { IVocab } from '@/dictionary/merriam.dictionary';
import AddVocabService from '@/services/addVocabService';
import Button from '../Button';

type VocabItemPropTypes = {
  data: IVocab;
};

const VocabItem = ({ data }: VocabItemPropTypes) => {
  const mainWord = useMemo(
    () => data.hwi.hw.replace(/[*]/g, ''),
    [data.hwi.hw]
  );
  const handleAddToAnki = useCallback(async () => {
    const front = `<div class='front'><h1 class='word'>${mainWord}</h1></div>`;
    const type = `<div class='type'>(${data.fl})</div>`;
    let definitions = '';

    for (let index = 0; index < data.shortdef.length; index++) {
      const def = data.shortdef[index];
      const defElement = `<li>${def}</li>`;
      definitions = definitions.concat(defElement);
    }

    const back = `<div class='back'><ul class='definitions'>${definitions}</ul></div>`;

    await AddVocabService.addNote({
      front: front.replace(/\n/g, ''),
      type,
      back,
    });
  }, [data, mainWord]);

  return (
    <div className='my-[10px] rounded-[10px] border bg-white px-[10px] py-[20px]'>
      <h2 className='text-[24px] font-[700] leading-[40px]'>{mainWord}</h2>
      <h4 className='text-[16px] font-[500] leading-[20px] text-blue'>
        {data.fl}
      </h4>
      {data.shortdef.length > 0 && (
        <ul className='ml-[16px] pt-[16px]'>
          {data.shortdef.map((def, index) => (
            <li key={index} className='list-decimal text-[18px] leading-[26px]'>
              {def}
            </li>
          ))}
        </ul>
      )}
      <div className='mt-[20px] flex justify-center'>
        <Button label='Add to Anki' action={handleAddToAnki} />
      </div>
    </div>
  );
};

export default React.memo(VocabItem);
