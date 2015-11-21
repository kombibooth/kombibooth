import React, { Component, PropTypes } from 'react';

import './button.scss';

export default class Button extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  handleClick () {
    this.props.onClick();
  }

  render () {
    return (
      <a onClick={ ::this.handleClick } className="btn">
        { this.props.text }
      </a>
    );
  }
}
