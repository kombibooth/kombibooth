import React, { Component } from 'react';

import Desktop from '../../components/layout/desktop';
import Window from '../../components/layout/desktop/window';
import WindowContent from '../../components/layout/desktop/window-content';
import NavGroup from '../../components/layout/desktop/nav-group';
import PaneGroup from '../../components/layout/desktop/pane-group';
import Pane from '../../components/layout/desktop/pane';
import NavItem from '../../components/layout/desktop/nav-item';

export default class SettingsPage extends Component {

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
            </PaneGroup>
          </WindowContent>
        </Window>
      </Desktop>
    );
  }

}
