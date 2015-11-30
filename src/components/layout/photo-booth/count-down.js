import React, { Component, PropTypes } from 'react';

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
    return (
      <div className="countdown">
        { !this.state.hide && this.state.seconds }
      </div>
    );
  }
}
