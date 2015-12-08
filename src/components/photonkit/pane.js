import React from 'react';
import classNames from 'classnames';

const Pane = ({ children, sidebar, className }) => {
  const paneClass = classNames(
    'pane',
    className,
    { sidebar: sidebar },
  );

  return (
    <div className={ paneClass }>
      { children }
    </div>
  );
};

export default Pane;
