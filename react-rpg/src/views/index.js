import React, { Component } from 'react';
import styled from 'styled-components';

import { GlobalStyle } from '../globalStyle';
import Game from '../components/Game';
import Inventory from '../components/Inventory';
import MenuBar from '../components/MenuBar';
import Movement from '../components/Movement';
import Player from '../components/Player';

const Container = styled.div`
  display: grid;
  min-height: calc(100vh - 100px);
  grid-template-columns: 300px 1fr;
  grid-template-rows: 50px 1fr 250px;
  grid-gap: 1px;
  grid-template-areas: "Menu Menu" "Player Game" "Inventory Movement";
`;


class App extends Component {
  render() {
    return (
      <Container>
        <MenuBar />
        <Player />
        <Game />
        <Inventory />
        <Movement />
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
