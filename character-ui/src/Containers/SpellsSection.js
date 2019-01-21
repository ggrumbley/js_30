import React, { useState } from 'react';

const SpellsSection = () => {
  const [spells, setSpells] = useState('Your Spells Info');
  const onChange = (e) => { setSpells(e.target.value); };
  return (
    <section className="Spells">
      <h2 className="title is-2">{spells}</h2>
      <input
        type="text"
        className="input"
        placeholder="You Spells Info"
        onChange={onChange}
        value={spells}
      />
    </section>
  );
};

export default SpellsSection;
