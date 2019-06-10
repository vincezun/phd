import React from 'react';

import '../../styles/button-1.scss';

const Button1 = () => {
  return (
    <a
      href='tel:07512027788'
      className='button-1'
      aria-label='Call Button'
      role='button'
    >
      Call
    </a>
  );
};

export default Button1;
