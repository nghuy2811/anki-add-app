'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

type ProvidersPropTypes = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersPropTypes) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default Providers;
