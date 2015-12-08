import React from 'react';

const NavGroup = ({ children, title }) => {
  let titleTag;

  if (title) {
    titleTag = (<h5 className="nav-group-title">{ title }</h5>);
  }

  return (
    <nav className="nav-group">
      { titleTag }
      { children }
    </nav>
  );
};

export default NavGroup;
