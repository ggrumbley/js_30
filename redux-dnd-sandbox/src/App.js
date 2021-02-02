import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { ChessBoard } from './features/knight';
import { AppContainer } from './features/inventory';
import { Navbar } from './app/Navbar';

import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={AppContainer} />
          <Route path="/knight" component={ChessBoard} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
