import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {
  Desktop,
  Window,
  WindowContent,
  Icon,
} from '../components/photonkit';

import {
  Header,
  Footer,
  Card,
} from '../components/layout/desktop';


class HomePage extends Component {
  static contextTypes = {
    history: PropTypes.object.isRequired,
  }

  handleStartPhotoBooth (e) {
    e.preventDefault();
    document.querySelector('body').webkitRequestFullscreen();
    this.context.history.pushState(null, '/photos/start');
  }

  handleBackClick () {
    this.context.history.goBack();
  }

  handleForwardClick () {
    this.context.history.goForward();
  }

  render () {
    return (
      <Desktop>
        <Window>
          <Header
            title="Kombi Booth"
            onBackClick={ ::this.handleBackClick }
            onForwardClick={ ::this.handleForwardClick } />
          <WindowContent>
            <Card>
              <a href="#" onClick={ ::this.handleStartPhotoBooth }>
                <Icon name="camera" />
                <p>Start photo booth</p>
              </a>
            </Card>
            <Card>
              <Link to="/settings/preferences">
                <Icon name="archive" />
                <p>Settings</p>
              </Link>
            </Card>
          </WindowContent>
          <Footer />
        </Window>
      </Desktop>
    );
  }
}

export default connect()(HomePage);
