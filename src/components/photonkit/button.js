import React from 'react';
import classNames from 'classnames';

const Button = ({
  children,
  className,
  size,
  active,
  icon,
  type = 'default',
  onClick,
}) => {
  const btnClasses = classNames(
    'btn',
    { size: `btn-${size}` },
    { active },
    `btn-${type}`,
    className
  );

  let iconTag;
  if (icon) {
    const iconClasses = classNames(
      'icon',
      `icon-${icon}`,
    );

    iconTag = (<span className={iconClasses}></span>);
  }

  return (
    <button className={btnClasses} onClick={onClick}>
      { iconTag }
      { children }
    </button>
  );
};

export default Button;
