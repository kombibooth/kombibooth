import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  Header,
  Footer,
} from '../../components/layout/desktop';

import {
  Desktop,
  Window,
  WindowContent,
  NavGroup,
  PaneGroup,
  Pane,
  NavItem,
} from '../../components/photonkit';

export default class SettingsPage extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
  };

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
            title="Settings"
            onBackClick={ ::this.handleBackClick }
            onForwardClick={ ::this.handleForwardClick }
            />
          <WindowContent>
            <PaneGroup>
              <Pane className="pane-sm" sidebar>
                <NavGroup title="General">
                  <NavItem icon="print">
                    Layout
                  </NavItem>
                </NavGroup>
              </Pane>
              <Pane>
                { this.props.children }
              </Pane>
            </PaneGroup>
          </WindowContent>
          <Footer />
        </Window>
      </Desktop>
    );
  }

}

export default connect()(SettingsPage);
