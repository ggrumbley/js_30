import React from 'react';
import styled from 'styled-components';

import Triangle from './Triangle';
import { useStore } from '../../store';
import * as C from '../../constants';

const StyledLogo = styled.div`
  h1 {
    color: #c6cbf5;
    font-family: 'Orbitron', sans-serif;
    font-size: 120px;
    font-weight: 1000;
    line-height: 1.2;
    left: 50%;
    margin: 0;
    margin-left: -420px;
    position: absolute;
    text-align: center;
    text-transform: uppercase;
    top: 80px;
    width: 852px;
    z-index: 11;
    background: -webkit-linear-gradient(top, #151c60, #c6cbf5 40%, black 40%, #e1a0ce 65%, white);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: white;
  }

  h2 {
    color: #d100b1;
    display: block;
    font-family: 'Yellowtail', cursive;
    font-size: 150px;
    font-weight: 700;
    margin-right: -8em;
    margin-top: 1em;
    position: absolute;
    text-shadow: 0 0 1px #d100b1, 0 -3px 3px rgba(255, 255, 255, 0.8), 0 3px 3px rgba(0, 0, 0, 0.5),
      0 0 15px #d100b1, 0 0 45px rgba(209, 0, 177, 0.8);
    text-align: center;
    text-decoration: underline;
    text-transform: none;
    -webkit-transform: skew(-10deg) rotate(-10deg);
    -ms-transform: skew(-10deg) rotate(-10deg);
    transform: skew(-10deg) rotate(-10deg);
    top: 20px;
    width: 100%;
    z-index: 11;
  }
`;

const ButtonContainer = styled.span`
  display: flex;
  justify-content: space-around;
  > button {
    border-radius: 10px;
    padding: 10px;
    background: transparent;
    border: 2px solid #d100b1;
    box-shadow: 0 0 1px #d100b1, 0 -3px 3px rgba(255, 255, 255, 0.8), 0 3px 3px rgba(0, 0, 0, 0.5),
      0 0 15px #d100b1, 0 0 45px rgba(209, 0, 177, 0.8);

    > h3 {
      color: #d100b1;
      display: block;
      font-family: 'Yellowtail', cursive;
      font-size: 30px;
      font-weight: 700;
      text-shadow: 0 0 1px #d100b1, 0 -3px 3px rgba(255, 255, 255, 0.8),
        0 3px 3px rgba(0, 0, 0, 0.5), 0 0 15px #d100b1, 0 0 45px rgba(209, 0, 177, 0.8);
      text-align: center;
      text-decoration: underline;
      text-transform: none;
    }
  }
`;

const Logo = () => {
  const { state, dispatch } = useStore();
  return (
    <StyledLogo>
      <h1>{state.value}</h1>
      <h2>Outrun</h2>
      <Triangle />

      <ButtonContainer>
        <button type="button" onClick={() => dispatch({ type: C.DECREMENT })}>
          <h3>The Past</h3>
        </button>
        <button type="button" onClick={() => dispatch({ type: C.INCREMENT })}>
          <h3>The Future</h3>
        </button>
      </ButtonContainer>
    </StyledLogo>
  );
};

export default Logo;
