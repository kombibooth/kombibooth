import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class LayoutChooser extends Component {
  static propTypes = {
    photo: PropTypes.object.isRequired,
  };

  render () {
    return (
      <div>
        <h1>Layout Chooser</h1>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    photo: state.photo,
  };
}

export default connect(mapStateToProps)(LayoutChooser);
