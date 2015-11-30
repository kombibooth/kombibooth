import React, { Component, PropTypes } from 'react';

import Logo from '../../components/layout/photo-booth/logo';
import RoundedBox from '../../components/layout/photo-booth/rounded-box';
import Button from '../../components/layout/photo-booth/button';

import './start.scss';

export default class Start extends Component {

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  handleTapToStartClick () {
    this.context.history.pushState(null, '/photos/take');
  }

  render () {
    return (
      <RoundedBox>
        <Logo type="vertical" />
        <Button
          text="Tap to start"
          onClick={ ::this.handleTapToStartClick }
          className="button-tap-to-start" />
      </RoundedBox>
    );
  }
}
