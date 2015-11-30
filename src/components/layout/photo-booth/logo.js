import React from 'react';

import vertical from './logo-vertical.png';
import horizontal from './logo-horizontal.png';

const Logo = ({ type }) => {
  if (type && type === 'vertical') {
    return (
      <img src={ vertical } />
    );
  }

  return (
    <img src={ horizontal } />
  );
};

export default Logo;
