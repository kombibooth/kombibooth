import React from 'react';
import classNames from 'classnames';

import './button.scss';

const Button = ({ text, onClick, className }) => {
  const buttonClassName = classNames('btn', className);

  return (
    <a onClick={onClick} className={ buttonClassName }>
      { text }
    </a>
  );
};

export default Button;
