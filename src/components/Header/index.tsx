'use client';

import React from 'react';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';

import { settingPopupState } from '@/recoil/atom/setting';

import GearIcon from '@/icons/GearIcon';

const Header = () => {
  const setOpenSetting = useSetRecoilState(settingPopupState);

  return (
    <div className='container'>
      <div className='relative flex justify-center'>
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
        <div
          className='absolute right-0 top-[50%] translate-y-[-50%] cursor-pointer'
          onClick={() => setOpenSetting(true)}
        >
          <GearIcon width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Header;
