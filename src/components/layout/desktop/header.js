import React from 'react';

import {
  HeaderToolbar,
  ToolbarActions,
  ButtonGroup,
  Button,
} from '../../photonkit';

const Header = ({
  title,
  onBackClick,
  onForwardClick,
  headerToolbarActions,
}) => (
  <HeaderToolbar>
    <HeaderToolbar title={ title }>
      <ToolbarActions>
        <ButtonGroup>
          <Button icon="left-open" onClick={ onBackClick } />
          <Button icon="right-open" onClick={ onForwardClick } />
        </ButtonGroup>
        { headerToolbarActions }
      </ToolbarActions>
    </HeaderToolbar>
  </HeaderToolbar>
);

export default Header;
