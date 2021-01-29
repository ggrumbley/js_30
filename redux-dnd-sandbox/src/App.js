import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { ChessBoard } from './features/knight';
import { Navbar } from './app/Navbar';

import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            Project will go HERE!
          </Route>
          <Route path="/knight" component={ChessBoard}></Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
