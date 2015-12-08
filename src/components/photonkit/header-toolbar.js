import React from 'react';


const HeaderToolbar = ({ children, title }) => {
  let titleTag;
  if (title) {
    titleTag = (<h1 className="title">{ title }</h1>);
  }

  return (
    <header className="toolbar">
      { titleTag }
      { children }
    </header>
  );
};

export default HeaderToolbar;
