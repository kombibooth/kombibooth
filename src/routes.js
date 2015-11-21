import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
  App,
  HomePage,
  PhotoTakePage,
  PhotoFormatChooserPage,
  PhotoViewerPage,
} from './containers';


export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage } />
    <Route path="/photos/take" component={ PhotoTakePage } />
    <Route path="/photos/format-chooser" component={ PhotoFormatChooserPage } />
    <Route path="/photos/viewer" component={ PhotoViewerPage } />
  </Route>
);
