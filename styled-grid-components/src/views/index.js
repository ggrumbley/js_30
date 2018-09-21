import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Base from './Base';
import AlbumLayout from './AlbumLayout';
import Gallery from './Gallery';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/base-grid" exact component={Base} />
      <Route path="/album-layout" exact component={AlbumLayout} />
      <Route path="/gallery" exact component={Gallery} />
    </Switch>
  </BrowserRouter>
);

export default App;
