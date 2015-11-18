import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Webcam from 'react-webcam';

import CountDown from '../../components/photo/count-down';
import { captured as photoCaptured } from '../../actions/photo';

import './webcam.scss';

export default class PhotoWebcam extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  handleOnCountDownFinish () {
    this.props.dispatch(
      photoCaptured(
        this.refs.webcam.getScreenshot()
      )
    );

    setTimeout(() => {
      this.refs.countdown.reset();
    }, 5000);
  }

  render () {
    return (
      <div className="photo-webcam">
        <CountDown
          seconds={ 5 }
          onCountDownFinish={ ::this.handleOnCountDownFinish }
          ref="countdown" />
        <Webcam ref="webcam" />
      </div>
    );
  }
}

export default connect()(PhotoWebcam);
