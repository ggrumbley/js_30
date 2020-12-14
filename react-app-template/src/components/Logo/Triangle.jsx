import React from 'react';
import styled from 'styled-components';

const StyledTriangle = styled.svg`
  -webkit-animation: dash 6s linear forwards;
  animation: dash 6s linear forwards;
  fill: url(#grad1);
  -webkit-filter: url(#dropshadow);
  filter: url(#dropshadow);
  left: 50%;
  margin-left: -200px;
  position: absolute;
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
  top: 6em;
  z-index: 8;

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

const StyledStopTop = styled.stop`
  stop-color: rgb(50, 50, 50);
  stop-opacity: 1;
`;

const StyledStopBottom = styled.stop`
  stop-color: black;
  stop-opacity: 1;
`;

const Triangle = () => (
  <StyledTriangle height="320" width="400">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
        <StyledStopTop offset="0%" />
        <StyledStopBottom offset="100%" />
      </linearGradient>
    </defs>
    <filter id="dropshadow" height="130%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
      <feOffset dx="2" dy="2" result="offsetblur" />
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <polygon points="0,0 400,0 200,300" stroke="#36e2f8" strokeWidth="3" />
  </StyledTriangle>
);

export default Triangle;
