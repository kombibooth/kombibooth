import React, { Component } from 'react';

import Logo from '../components/layout/logo';

export default class Home extends Component {
  render () {
    return (
      <div>
        <Logo type="horizontal" />
        <Logo type="vertical" />
      </div>
    );
  }
}
