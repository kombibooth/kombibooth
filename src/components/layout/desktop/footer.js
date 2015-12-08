import React from 'react';

import {
  FooterToolbar,
  ToolbarActions,
  Icon,
} from '../../photonkit';

const Footer = () => (
  <FooterToolbar>
    <ToolbarActions>
      <div className="pull-right">
        <Icon name="github" />
      </div>
    </ToolbarActions>
  </FooterToolbar>
);

export default Footer;
