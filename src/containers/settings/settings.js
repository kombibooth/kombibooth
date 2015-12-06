import React, { Component, PropTypes } from 'react';

import {
  Desktop,
  Window,
  WindowContent,
  NavGroup,
  PaneGroup,
  PaddedMore,
  Pane,
  NavItem,
} from '../../components/layout/desktop';

export default class SettingsPage extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  render () {
    return (
      <Desktop>
        <Window>
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
                <PaddedMore>
                  { this.props.children }
                </PaddedMore>
              </Pane>
            </PaneGroup>
          </WindowContent>
        </Window>
      </Desktop>
    );
  }

}
