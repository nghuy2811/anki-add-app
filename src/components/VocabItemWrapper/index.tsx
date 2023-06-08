import React from 'react';
import VocabItem from '../VocabItem';

type VocabItemWrapperPropsType = {
  data: any;
};

const VocabItemWrapper = ({ data }: VocabItemWrapperPropsType) => {
  if (typeof data === 'string') {
    return (
      <div className='my-[10px] rounded-[10px] border bg-white px-[10px] py-[20px]'>
        <h2 className='text-[24px] font-[700] leading-[40px]'>{data}</h2>
      </div>
    );
  }

  return <VocabItem data={data} />;
};

export default VocabItemWrapper;
