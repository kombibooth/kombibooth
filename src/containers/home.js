import React, { Component } from 'react';

import Logo from '../components/layout/logo';
import RoundedBox from '../components/layout/rounded-box';
import Button from '../components/layout/button';

import './home.scss';

export default class Home extends Component {
  render () {
    return (
      <div>
        <RoundedBox>
          <Logo type="vertical" />
          <div className="button-tap-to-start">
            <Button text="Tap to start" />
          </div>
        </RoundedBox>
      </div>
    );
  }
}
