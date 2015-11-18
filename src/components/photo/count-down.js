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
    }
  }

  componentDidMount () {
    const countDown = setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1
      });

      if (this.state.seconds === this.props.seconds) {
        if (this.props.onCountDownFinish) {
          this.props.onCountDownFinish();
        }

        clearInterval(countDown);
        return;
      }

      if (this.props.onCountDownTickTack) {
        this.props.onCountDownTickTack(this.state.seconds);
      }
    }, 1000);
  }

  render () {
    return (
      <div className='countdown'>
        { this.state.seconds }
      </div>
    )
  }
}
