import React from 'react';

import './rounded-box.scss';

const RoundedBox = ({ children }) => {
  return (
    <div className="rounded-box">
      <div className="rounded-box-content">
        { children }
      </div>
    </div>
  );
};

export default RoundedBox;
