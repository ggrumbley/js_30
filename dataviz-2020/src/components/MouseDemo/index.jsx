import { svg } from 'd3';
import React, { useState, useCallback } from 'react';

const width = 960;
const height = 500;
const circleRadius = 30;
const initMousePos = { x: width / 2, y: height / 2 };

export const MouseDemo = () => {
  const [{ x, y }, setMouseLocation] = useState(initMousePos);

  const handleMouseMove = useCallback(
    (e) => {
      setMouseLocation({ x: e.clientX, y: e.clientY });
    },
    [setMouseLocation],
  );

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
      <circle cx={x} cy={y} r={circleRadius} />
    </svg>
  );
};
