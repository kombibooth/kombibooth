import React from 'react';

import DevTools from '../components/dev-tools';

import './app.scss';

export default ({ children }) => (
  <div>
    <div className="kombi-booth">
      { children }
    </div>
    <DevTools />
  </div>
);
