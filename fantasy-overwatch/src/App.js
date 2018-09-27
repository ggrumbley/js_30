import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header, Container } from 'semantic-ui-react';

import './App.css';
import Players from './views/Players';
import NavBar from './components/NavBar';
import TeamInfo from './views/TeamInfo';
import Heroes from './views/Heroes';
import TeamOrganization from './views/TeamOrganization';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <Header inverted as="h1">
              Fantasy Overwatch
            </Header>
          </div>
          <Container>
            <NavBar />
            <Switch>
              <Route path="/" exact component={TeamInfo} />
              <Route path="/players" exact component={Players} />
              <Route path="/heroes" exact component={Heroes} />
              <Route path="/team-organization" exact component={TeamOrganization} />
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
