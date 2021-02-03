import React from 'react';

export const Inventory = () => {
  let inventory = new Array(12).fill({});

  return (
    <div className="inventory">
      {inventory.map((itemSlot) => (
        <div className="inventory-slot"></div>
      ))}
    </div>
  );
};
