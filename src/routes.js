import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PhotoBooth from './components/layout/photo-booth';

import {
  HomePage,
  PhotoTakePage,
  PhotoLayoutChooserPage,
  PhotoViewerPage,
} from './containers';


export default (
  <Route path="/" component={ PhotoBooth }>
    <IndexRoute component={ HomePage } />
    <Route path="/photos/take" component={ PhotoTakePage } />
    <Route path="/photos/format-chooser" component={ PhotoLayoutChooserPage } />
    <Route path="/photos/viewer" component={ PhotoViewerPage } />
  </Route>
);
