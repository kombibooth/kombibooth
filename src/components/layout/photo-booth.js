import React, { Component, PropTypes } from 'react';

import DevTools from '../dev-tools';

import './photo-booth.scss';

export default class PhotoBooth extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  componentDidMount () {
    const className = 'photo-booth-body';
    if (!document.body.classList.contains(className)) {
      document.body.className += className;
    }
  }

  render () {
    return (
      <div className="photo-booth">
        { this.props.children }
        <DevTools />
      </div>
    );
  }
}
