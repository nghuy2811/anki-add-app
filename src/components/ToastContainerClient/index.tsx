'use client';

import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ToastContainerClient = () => {
  return (
    <ToastContainer
      theme='colored'
      autoClose={3000}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
    />
  );
};

export default ToastContainerClient;
