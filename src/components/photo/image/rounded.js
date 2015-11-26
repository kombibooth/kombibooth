import React from 'react';
import classNames from 'classnames';

import './rounded.scss';

const PhotoImageRounded = ({ image, size }) => {
  const imageClassName = classNames(
    'photo-image-rounded',
    size
  );

  return (
    <img src={ image } className={ imageClassName } />
  );
};

export default PhotoImageRounded;
