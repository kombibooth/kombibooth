import React, { Component, PropTypes } from 'react';

import './button.scss'

export default class Button extends Component {

  static propTypes = {
    text: PropTypes.string.required,
  }

  render () {
    return (
      <a href="#" className="btn">
        { this.props.text }
      </a>
    );
  }
}
