'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { settingPopupState } from '@/recoil/atom/setting';
import { LocalStorageKeys } from '@/utils/constants';

import styles from './Overlay.module.scss';
import Overlay from './Overlay';
import Button from '../Button';
import CloseIcon from '@/icons/CloseIcon';

const SettingOverlay = () => {
  const [show, setShow] = useRecoilState(settingPopupState);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [deckNameInput, setDeckNameInput] = useState('');

  const handleClosePopup = useCallback(() => {
    setShow(false);
  }, [setShow]);

  const handleSaveSettings = useCallback(() => {
    if (apiKeyInput) {
      localStorage.setItem(LocalStorageKeys.apiKey, apiKeyInput);
    } else {
      localStorage.removeItem(LocalStorageKeys.apiKey);
    }

    if (deckNameInput) {
      localStorage.setItem(LocalStorageKeys.deckName, deckNameInput);
    } else {
      localStorage.removeItem(LocalStorageKeys.deckName);
    }

    handleClosePopup();
  }, [apiKeyInput, deckNameInput, handleClosePopup]);

  useEffect(() => {
    if (show) {
      const storedApiKey = localStorage.getItem(LocalStorageKeys.apiKey);
      const storedDeckName = localStorage.getItem(LocalStorageKeys.deckName);

      if (storedApiKey) setApiKeyInput(storedApiKey);
      if (storedDeckName) setDeckNameInput(storedDeckName);
    }
  }, [show]);

  return (
    <Overlay
      className={`${styles['mfp-3d-unfold']} ${
        show ? styles['mfp-ready'] : styles['mfp-removing']
      }`}
    >
      <div className={`${styles['mfp-content']}`}>
        <div
          className={`${styles['mfp-with-anim']} w-[600px] rounded-[10px] bg-[white] `}
        >
          <div className='relative px-[20px] pb-[30px] pt-[40px]'>
            <div
              className='absolute right-[10px] top-[10px] cursor-pointer'
              onClick={handleClosePopup}
            >
              <CloseIcon width={24} height={24} />
            </div>
            <h2 className='mb-[20px] text-center text-[20px] font-bold'>
              Settings
            </h2>
            <div>
              <div className='flex items-center justify-between'>
                <span>API Key:</span>
                <input
                  type='text'
                  className='h-[40px] w-[400px] rounded-[10px] border-[1px] border-[#333] px-[10px]'
                  value={apiKeyInput}
                  onChange={(event) => setApiKeyInput(event.target.value)}
                />
              </div>
              <div className='mt-[16px] flex items-center justify-between'>
                <span>Deck name:</span>
                <input
                  type='text'
                  className='h-[40px] w-[400px] rounded-[10px] border-[1px] border-[#333] px-[10px]'
                  value={deckNameInput}
                  onChange={(event) => setDeckNameInput(event.target.value)}
                />
              </div>
            </div>
            <div className='mt-[20px] flex justify-center'>
              <Button label='Save settings' action={handleSaveSettings} />
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default SettingOverlay;
