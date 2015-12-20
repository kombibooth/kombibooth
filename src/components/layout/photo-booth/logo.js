import React from 'react';

import vertical from './logo-vertical.png';
import horizontal from './logo-horizontal.png';

import './logo.scss';

const Logo = ({ type }) => {
  if (type && type === 'vertical') {
    return (
      <div className="logo logo-vertical">
        <img src={ vertical } />
      </div>
    );
  }

  return (
    <div className="logo logo-horizontal">
      <img src={ horizontal } />
    </div>
  );
};

export default Logo;
