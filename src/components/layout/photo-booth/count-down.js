import React, { Component, PropTypes } from 'react';

import './count-down.scss';

export default class CountDown extends Component {
  static propTypes = {
    seconds: PropTypes.number.isRequired,
    onCountDownFinish: PropTypes.func,
    onCountDownTickTack: PropTypes.func,
  };

  constructor () {
    super();

    this.state = {
      seconds: 0,
      hide: true,
    };
  }

  componentWillMount () {
    this.setState({
      seconds: this.props.seconds,
    });
  }

  componentDidMount () {
    this.countDown();
  }

  reset () {
    this.countDown();
  }

  countDown () {
    this.setState({
      hide: false,
    });

    const countDown = setInterval(() => {
      if (this.state.seconds === 0) {
        if (this.props.onCountDownFinish) {
          this.props.onCountDownFinish();
        }

        this.setState({
          seconds: this.props.seconds,
          hide: true,
        });

        clearInterval(countDown);

        return;
      }

      if (this.props.onCountDownTickTack) {
        this.props.onCountDownTickTack(this.state.seconds);
      }

      this.setState({
        seconds: this.state.seconds - 1,
      });
    }, 1000);
  }

  render () {
    if (this.state.hide) {
      return (<div />);
    }

    return (
      <div className="countdown">
        <div className="countdown-circle-timer">
          { this.state.seconds }
          <div className="countdown-circle-timer-pie"></div>
        </div>
      </div>
    );
  }
}
