import React from 'react';
import styled from 'styled-components';

const GameWindow = styled.div`
  grid-area: Game;
  background-color: peachpuff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Game = () => (
  <GameWindow>
    Game Window
  </GameWindow>

);


export default Game;
