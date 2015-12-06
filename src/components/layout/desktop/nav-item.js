import React from 'react';
import classNames from 'classnames';

const NavItem = ({ children, icon, active, onClick }) => {
  const linkClass = classNames(
    'nav-group-item',
    {active: active},
  );

  let iconTag;

  if (icon) {
    iconTag = (
      <span className={ classNames('icon', `icon-${icon}`) }>
      </span>
    );
  }

  return (
    <a className={ linkClass } onClick={ onClick }>
      { iconTag }
      <div>{ children }</div>
    </a>
  );
};

export default NavItem;
