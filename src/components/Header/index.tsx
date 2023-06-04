import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='container'>
      <div className='flex justify-center'>
        <div className='relative h-[70px] w-[150px]'>
          <Image
            src={'/images/logo.png'}
            fill
            alt='Logo'
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
