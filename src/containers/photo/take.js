import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Webcam from 'react-webcam';

import Logo from '../../components/layout/logo';
import PhotoImageRounded from '../../components/photo/image/rounded';
import CountDown from '../../components/photo/count-down';

import { photoCaptured, lastPhotoCaptured } from '../../actions/photo';

const COUNT_DOWN_SECONDS = 5;
const MAX_PHOTOS_CAPTURED = 4;
const COUNT_DOWN_RESTART_AFTER = 5000;

import './take.scss';

class PhotoTake extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    photo: PropTypes.object.isRequired,
  }

  handleOnCountDownFinish (photo) {
    const { photos } = this.props.photo;

    if (photos.length + 1 === MAX_PHOTOS_CAPTURED) {
      this.props.dispatch(
        lastPhotoCaptured(
          this.refs.webcam.getScreenshot()
        )
      );
      return;
    }

    this.props.dispatch(
      photoCaptured(
        this.refs.webcam.getScreenshot()
      )
    );
  }

  componentWillReceiveProps (props) {
    const { shouldStopCapture } = props.photo;

    const countDownTimeout = setTimeout(() => {
      this.refs.countdown.reset();
    }, COUNT_DOWN_RESTART_AFTER);

    if (shouldStopCapture) {
      clearTimeout(countDownTimeout);
    }
  }

  render () {
    const { photos } = this.props.photo;

    return (
      <div className="photo-take">
        <div className="logo">
          <Logo type="horizontal" />
        </div>
        <div className="photo-webcam">
          <CountDown
            seconds={ COUNT_DOWN_SECONDS }
            onCountDownFinish={ ::this.handleOnCountDownFinish }
            ref="countdown" />
          <Webcam ref="webcam" />
        </div>
        <div className="photo-list">
          <ul>
            {
              photos.map((photo, index) =>
                <li key={index}>
                  <PhotoImageRounded
                    image={ photo }
                    size="small" />
                </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    photo: state.photo,
  };
}

export default connect(mapStateToProps)(PhotoTake);
