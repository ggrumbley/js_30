import React from 'react';

import './Face.css';

export const Face = () => {
  return (
    <svg width="960" height="500">
      <circle cx="480" cy="250" r="200" fill="yellow" stroke="black" stroke-width="10"></circle>
      <circle cx="390" cy="180" r="50"></circle>
      <circle cx="570" cy="180" r="50"></circle>
    </svg>
  );
};
