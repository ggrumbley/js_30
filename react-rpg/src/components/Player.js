import React from 'react';
import styled from 'styled-components';

const PlayerWindow = styled.div`
  grid-area: Player;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Player = () => (
  <PlayerWindow>
    Player Window
  </PlayerWindow>

);


export default Player;
