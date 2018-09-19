import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Base from './Base';
import AlbumLayout from './AlbumLayout';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/base-grid" exact component={Base} />
      <Route path="/album-layout" exact component={AlbumLayout} />
    </Switch>
  </BrowserRouter>
);

export default App;
