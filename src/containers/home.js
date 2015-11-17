import React, { Component, PropTypes } from 'react';

import Logo from '../components/layout/logo';
import RoundedBox from '../components/layout/rounded-box';
import Button from '../components/layout/button';

import './home.scss';

export default class Home extends Component {

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  handleTapToStartClick () {
    this.context.history.pushState(null, '/photos/take');
  }

  render () {
    return (
      <div>
        <RoundedBox>
          <Logo type="vertical" />
          <div className="button-tap-to-start">
            <Button
              text="Tap to start"
              onClick={ ::this.handleTapToStartClick } />
          </div>
        </RoundedBox>
      </div>
    );
  }
}
