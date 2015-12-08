import React from 'react';
import classNames from 'classnames';

const Icon = ({ name }) => (
  <span className={ classNames('icon', `icon-${name}`)}></span>
);

export default Icon;
