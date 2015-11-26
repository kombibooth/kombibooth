import React from 'react';

import './photo-booth.scss';

const PhotoBooth = ({ children }) => {
  return (
    <div className="photo-booth">
      { children }
    </div>
  );
};

export default PhotoBooth;
