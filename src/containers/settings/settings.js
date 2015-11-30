import React, { Component } from 'react';

import Desktop from '../../components/layout/desktop';

export default class SettingsPage extends Component {

  render () {
    return (
      <Desktop>
        <header className="toolbar toolbar-header">
          <h1 className="title">Header</h1>
        </header>
      </Desktop>
    );
  }

}
