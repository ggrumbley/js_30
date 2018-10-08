import React, { Component } from 'react';

import Game from '../components/Game';
import Inventory from '../components/Inventory';
import MenuBar from '../components/MenuBar';
import Movement from '../components/Movement';
import Player from '../components/Player';

import '../styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <MenuBar />
        <Player />
        <Game />
        <Inventory />
        <Movement />
      </div>
    );
  }
}

export default App;
