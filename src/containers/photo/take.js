import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Webcam from 'react-webcam';

import PhotoBooth from '../../components/layout/photo-booth';
import Logo from '../../components/layout/logo';
import PhotoImageRounded from '../../components/photo/image/rounded';
import CountDown from '../../components/photo/count-down';

import { photoCaptured, lastPhotoCaptured } from '../../actions/photo';

const COUNT_DOWN_SECONDS = 5;
const MAX_PHOTOS_CAPTURED = 3;
const COUNT_DOWN_RESTART_AFTER = 5000;

import './take.scss';

class PhotoTake extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    photo: PropTypes.object.isRequired,
  }

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

  constructor () {
    super();
    this.state = {
      isWebcamActive: true,
    };
  }

  componentWillReceiveProps (props) {
    this.setState({
      isWebcamActive: false,
    });

    const { shouldStopCapture } = props.photo;

    setTimeout(() => {
      if (shouldStopCapture) {
        this.context.history.pushState(null, '/photos/format-chooser');
        return;
      }

      this.setState({
        isWebcamActive: true,
      });

      this.refs.countdown.reset();
    }, COUNT_DOWN_RESTART_AFTER);
  }

  handleOnCountDownFinish () {
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

  render () {
    const { photos } = this.props.photo;
    const lastPhoto = photos[photos.length - 1];

    let webcamClassName;
    let largePhoto;

    if (!this.state.isWebcamActive) {
      webcamClassName = 'display-none';
      largePhoto = <PhotoImageRounded image={ lastPhoto } size="large" />;
    }

    return (
      <PhotoBooth>
        <div className="photo-take">
          <div className="logo">
            <Logo type="horizontal" />
          </div>
          <div className="photo-webcam">
            <CountDown
              seconds={ COUNT_DOWN_SECONDS }
              onCountDownFinish={ ::this.handleOnCountDownFinish }
              ref="countdown" />
            <Webcam ref="webcam" audio={ false } className={ webcamClassName } />
            { largePhoto }
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
      </PhotoBooth>
    );
  }
}

function mapStateToProps (state) {
  return {
    photo: state.photo,
  };
}

export default connect(mapStateToProps)(PhotoTake);
