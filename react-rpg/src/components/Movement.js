import React from 'react';
import styled from 'styled-components';

const MovementWindow = styled.div`
  grid-area: Movement;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Movement = () => (
  <MovementWindow>
    Movement Window
  </MovementWindow>

);


export default Movement;
