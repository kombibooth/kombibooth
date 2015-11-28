import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PhotoBooth from './components/layout/photo-booth';

import {
  App,
  HomePage,
  PhotoStartPage,
  PhotoTakePage,
  PhotoLayoutChooserPage,
  PhotoViewerPage,
  SettingsPage,
} from './containers';


export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ HomePage } />
    <Route path="/photos" component={ PhotoBooth }>
      <Route path="/photos/start" component={ PhotoStartPage } />
      <Route path="/photos/take" component={ PhotoTakePage } />
      <Route path="/photos/format-chooser" component={ PhotoLayoutChooserPage } />
      <Route path="/photos/viewer" component={ PhotoViewerPage } />
    </Route>
    <Route path="/settings" component={SettingsPage} />
  </Route>
);
