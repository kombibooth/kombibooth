import React, { Component, PropTypes } from 'react';

import Logo from '../../components/layout/photo-booth/logo';
import RoundedBox from '../../components/layout/photo-booth/rounded-box';
import ButtonTapToStart from '../../components/layout/photo-booth/button-tap-to-start';

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
        <ButtonTapToStart onTapToStartClick={ ::this.handleTapToStartClick } />
      </RoundedBox>
    );
  }
}
