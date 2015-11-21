import React, { Component, PropTypes } from 'react';

import DevTools from '../components/dev-tools';

import './app.scss';

export default class App extends Component {

  static propTypes = {
    children: PropTypes.any,
  };

  render () {
    return (
      <div>
        { this.props.children }
        <DevTools />
      </div>
    );
  }
}
