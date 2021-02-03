import React from 'react';

import { Inventory } from '.';

import './Inventory.css';

export const AppContainer = () => {
  return (
    <div className="inventory-app-container">
      <div className="game-screen">GameScreen</div>
      <div className="player-actions">Player Actions would go here</div>
      <Inventory />
    </div>
  );
};
