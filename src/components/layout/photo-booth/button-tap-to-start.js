import React from 'react';

import Button from './button';

import './button-tap-to-start.scss';

const ButtonTapToStart = ({ onTapToStartClick }) => (
  <Button
    text="Tap to start"
    onClick={ onTapToStartClick }
    className="button-tap-to-start" />
);

export default ButtonTapToStart;
