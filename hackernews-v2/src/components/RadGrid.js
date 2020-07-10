import React from 'react';
import styled, { keyframes } from 'styled-components';

const speed = '5s';
const increaseVert = `${speed}/10`;

const move = keyframes`
  from {
    top: 0%;
    opacity: 0.8;
  }
  to {
    top: 100%;
    opacity: 1;
  }
`;

const moveAnimation = `
  ${move} ${speed} infinite linear;
`;

// const angleAnimation = keyframes`
//   0% {
//     transform: rotateX(58deg);
//   }
//   50% {
//     transform: rotateX(60deg);
//   }
//   100% {
//     transform: rotateX(58deg);
//   }
// `;

const blurNHue = keyframes`
  0% {
    filter: blur(10px);
    hue-rotate(-15deg);
  }
  50% {
    filter: blur(20px);
    hue-rotate(0deg);
  }
  100% {
    filter: blur(10px);
    hue-rotate(-15deg);
  }
`;

const blurNHueAnimation = `
  ${blurNHue} ${speed} infinate ease-in-out;
`;

const Main = styled.div`
  animation: ${blurNHue} 5s infinate ease-in-out;
  content: '';
  display: block;
  background: rgba(224, 87, 90, 1);
  background: linear-gradient(
    180deg,
    rgba(150, 50, 50, 0.8) 0%,
    rgba(200, 50, 100, 1) 6%,
    rgba(220, 220, 220, 1) 8%,
    rgba(224, 87, 90, 1) 12%,
    rgba(224, 37, 90, 1) 100%
  );
  width: 150vw;
  height: 80%;
  left: -25%;
  bottom: -10%;
  position: absolute;
`;

const Grid = styled.div`
  perspective: 300px;
  width: 100%;
  height: 100%;
  position: relative;
`;

const GridWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
`;

const GridInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transform: rotateX(60deg);
`;

const Line = styled.div`
  display: block;
  position: absolute;
  width: 0px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid white;
  box-sizing: border-box;
  height: 100%;
  background: white;
  box-shadow: 0px 0px 6px 2px rgba(255, 225, 225, 0.8);
`;

const HoriLine = styled(Line)`
  &:nth-child(1) {
    left: -40%;
  }
  &:nth-child(2) {
    left: -20%;
  }
  &:nth-child(3) {
    left: 0%;
  }
  &:nth-child(4) {
    left: 20%;
  }
  &:nth-child(5) {
    left: 40%;
  }
  &:nth-child(6) {
    left: 60%;
  }
  &:nth-child(7) {
    left: 80%;
  }
  &:nth-child(8) {
    left: 100%;
  }
  &:nth-child(9) {
    left: 120%;
  }
  &:nth-child(10) {
    left: 140%;
  }
`;

const VertLine = styled(Line)`
  animation: ${move} 5s infinite linear;
  width: 200%;
  left: -50%;
  height: 0px;

  &:nth-child(1) {
    animation: none;
    opacity: 0.7;
  }
  &:nth-child(2) {
    animation-delay: ${increaseVert};
  }
  &:nth-child(3) {
    animation-delay: ${increaseVert} * 2;
  }
  &:nth-child(4) {
    animation-delay: ${increaseVert} * 3;
  }
  &:nth-child(5) {
    animation-delay: ${increaseVert} * 4;
  }
  &:nth-child(6) {
    animation-delay: ${increaseVert} * 5;
  }
  &:nth-child(7) {
    animation-delay: ${increaseVert} * 6;
  }
  &:nth-child(8) {
    animation-delay: ${increaseVert} * 7;
  }
  &:nth-child(9) {
    animation-delay: ${increaseVert} * 8;
  }
  &:nth-child(10) {
    animation-delay: ${increaseVert} * 9;
  }
`;

const RadGrid = () => (
  <div>
    <Main />
    <Grid>
      <GridInner>
        <GridWrapper>
          <HoriLine />
          <HoriLine />
          <HoriLine />
          <HoriLine />
          <HoriLine />
          <HoriLine />
          <HoriLine />
          <HoriLine />
          <HoriLine />
          <HoriLine />
          <HoriLine />
        </GridWrapper>
        <GridWrapper>
          <VertLine />
          <VertLine />
          <VertLine />
          <VertLine />
          <VertLine />
          <VertLine />
          <VertLine />
          <VertLine />
          <VertLine />
          <VertLine />
          <VertLine />
        </GridWrapper>
      </GridInner>
    </Grid>
  </div>
);

export default RadGrid;
