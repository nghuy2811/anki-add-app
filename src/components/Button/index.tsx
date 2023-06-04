import React from 'react';

type ButtonPropTypes = {
  label: string;
  action: Function;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({ label, action, type }: ButtonPropTypes) => {
  return (
    <button
      type={type || 'button'}
      className='h-[40px] min-w-[100px] rounded-[10px] bg-[#000] px-[10px] py-[6px] font-bold uppercase text-[#fff] transition-all hover:bg-[#fff] hover:text-[#000]'
      onClick={() => action()}
    >
      {label}
    </button>
  );
};

export default Button;
