import React from 'react';
import { range } from 'd3';

import { Face } from '.';

export default {
  title: 'DataViz/Face',
  component: Face,
};

const width = 160;
const height = 160;
const faceArray = range(6 * 3);

export const smileyFace = () => (
  <Face
    width={width}
    height={height}
    centerX={width / 2}
    centerY={height / 2}
    strokeWidth={6}
    eyeOffsetX={30}
    eyeOffsetY={30}
    eyeRadius={14}
    mouthWidth={10}
    mouthRadius={46}
  />
);

export const randoSmileyFaces = () => (
  <>
    {faceArray.map(() => (
      <Face
        width={width}
        height={height}
        centerX={width / 2}
        centerY={height / 2}
        strokeWidth={6 + Math.random() * 3}
        eyeOffsetX={20 + Math.random() * 9}
        eyeOffsetY={20 + Math.random() * 15}
        eyeRadius={5 + Math.random() * 10}
        mouthWidth={7 + Math.random() * 9}
        mouthRadius={30 + Math.random() * 10}
      />
    ))}
  </>
);
