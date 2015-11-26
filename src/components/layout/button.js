import React from 'react';

import './button.scss';

const Button = ({ text, onClick }) => (
  <a onClick={onClick} className="btn">
    { text }
  </a>
);

export default Button;
