'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSetRecoilState, useRecoilState } from 'recoil';

import { settingPopupState } from '@/recoil/atom/setting';

import GearIcon from '@/icons/GearIcon';
import SuccessIcon from '@/icons/SuccessIcon';
import WarningIcon from '@/icons/WarningIcon';
import { LocalStorageKeys } from '@/utils/constants';

const Header = () => {
  const [isOpeningSetting, setOpenSetting] = useRecoilState(settingPopupState);
  const [isValidSettings, setIsValidSettings] = useState<undefined | Boolean>(
    undefined
  );

  useEffect(() => {
    const storedApiKey = localStorage.getItem(LocalStorageKeys.apiKey);
    const storedDeckName = localStorage.getItem(LocalStorageKeys.deckName);

    if (storedApiKey && storedDeckName) setIsValidSettings(true);
    else setIsValidSettings(false);
  }, [isOpeningSetting]);

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
          <div
            className='transition-all'
            style={{ rotate: isOpeningSetting ? '-720deg' : '0deg' }}
          >
            <GearIcon width={36} height={36} />
          </div>
          {isValidSettings !== undefined && (
            <div className='absolute bottom-[-10px] right-[-6px]'>
              {isValidSettings ? (
                <SuccessIcon width={20} height={20} />
              ) : (
                <WarningIcon width={20} height={20} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
