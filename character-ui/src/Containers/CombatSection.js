import React, { useState } from 'react';

const CombatSection = () => {
  const [combat, setCombat] = useState('Your Combat Info');
  const onChange = (e) => { setCombat(e.target.value); };
  return (
    <section className="Combat">
      <h2 className="title is-2">{combat}</h2>
      <input
        type="text"
        className="input"
        placeholder="You Combat Info"
        onChange={onChange}
        value={combat}
      />
    </section>
  );
};

export default CombatSection;
