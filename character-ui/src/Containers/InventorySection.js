import React, { useState } from 'react';

const InventorySection = () => {
  const [inventory, setInventory] = useState('Your Inventory Info');
  const onChange = (e) => { setInventory(e.target.value); };
  return (
    <section className="Inventory">
      <h2 className="title is-2">{inventory}</h2>
      <input
        type="text"
        className="input"
        placeholder="You Inventory Info"
        onChange={onChange}
        value={inventory}
      />
    </section>
  );
};

export default InventorySection;
