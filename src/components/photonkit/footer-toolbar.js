import React from 'react';

const FooterToolbar = ({ children, style }) => (
  <footer className="toolbar footer-toolbar" style={ style }>
    { children }
  </footer>
);

export default FooterToolbar;
