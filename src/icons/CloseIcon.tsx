import React, { FunctionComponent, SVGProps } from 'react';

export const CloseIcon: FunctionComponent<SVGProps<SVGPathElement>> = (
  props
) => {
  return (
    // @ts-ignore
    <svg
      width='800px'
      height='800px'
      viewBox='0 0 24 24'
      fill='none'
      {...props}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Menu / Close_MD'>
        <path
          id='Vector'
          d='M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18'
          stroke='#000000'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default CloseIcon;
