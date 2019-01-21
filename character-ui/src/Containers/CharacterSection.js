import React, { useState } from 'react';

const CharacterSection = () => {
  const [character, setCharacter] = useState('Your Character Info');
  const onChange = (e) => { setCharacter(e.target.value); };
  return (
    <section className="Character">
      <h2 className="title is-2">{character}</h2>
      <input
        type="text"
        className="input"
        placeholder="You Character Info"
        onChange={onChange}
        value={character}
      />
    </section>
  );
};

export default CharacterSection;
