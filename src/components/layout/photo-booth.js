import React, { Component, PropTypes } from 'react';

import DevTools from '../dev-tools';

import './photo-booth.scss';

const style = {
  body: {
    backgroundColor: '#ED4145',
  },
};

export default class PhotoBooth extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  componentDidMount () {
    document.body.style.background = style.body.backgroundColor;
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
