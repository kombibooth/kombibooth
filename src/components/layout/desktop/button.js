import React from 'react';
import classNames from 'classnames';

const Button = ({ children, className, size = 'large', type = 'default', onClick }) => {
  const btnClasses = classNames(
    'btn',
    `btn-${size}`,
    `btn-${type}`,
    className
  );

  return (
    <button className={btnClasses} onClick={onClick}>
      { children }
    </button>
  );
};

export default Button;
