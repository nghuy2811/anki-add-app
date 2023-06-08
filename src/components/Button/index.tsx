import React from 'react';

type ButtonPropTypes = {
  label: string;
  action: Function;
  type?: 'button' | 'submit' | 'reset';
  disable?: boolean;
};

const Button = ({ label, action, type, disable }: ButtonPropTypes) => {
  return (
    <button
      type={type || 'button'}
      className='h-[40px] min-w-[100px] rounded-[10px] bg-[#000] px-[10px] py-[6px] font-bold uppercase text-[#fff] transition-all hover:bg-[#fff] hover:text-[#000] disabled:pointer-events-none disabled:bg-[gray] disabled:opacity-[0.5]'
      onClick={() => action()}
      disabled={disable}
    >
      {label}
    </button>
  );
};

export default Button;
