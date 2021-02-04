import React from 'react';
import { useSelector } from 'react-redux';
import { selectInventory } from '.';

const buildInventory = (inv) => {
  if (inv.length === 12) return inv;

  const emptySlots = new Array(12 - inv.length).fill({});

  return [...inv, ...emptySlots];
};

export const Inventory = () => {
  const playerInventory = useSelector(selectInventory);
  const inventory = buildInventory(playerInventory);

  return (
    <div className="inventory">
      {inventory.map((item, i) => {
        const slotKey = item.name ? `slot${i}_${item.name}` : `slot${i}_empty`;

        return (
          <div key={slotKey} className="inventory-slot">
            {item.name}
          </div>
        );
      })}
    </div>
  );
};
