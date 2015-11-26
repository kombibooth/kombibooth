import React from 'react';

import DevTools from '../dev-tools';

import './photo-booth.scss';

const PhotoBooth = ({ children }) => {
  return (
    <div className="photo-booth">
      { children }
      <DevTools />
    </div>
  );
};

export default PhotoBooth;
