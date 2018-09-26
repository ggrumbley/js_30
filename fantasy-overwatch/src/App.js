import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header, Container } from 'semantic-ui-react';

import './App.css';
import NavBar from './components/NavBar';
import UnitInfo from './views/UnitInfo';
import Heroes from './views/Heroes';
import Players from './views/Players';
import UnitOrganization from './views/UnitOrganization';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header inverted as="h1">
            Fantasy Overwatch
          </Header>
        </div>
        <BrowserRouter>
          <Container>
            <NavBar />
            <Route path="/" exact component={UnitInfo} />
            <Route path="/players" exact component={Players} />
            <Route path="/heroes" exact component={Heroes} />
            <Route path="/unit-organization" exact component={UnitOrganization} />
          </Container>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
