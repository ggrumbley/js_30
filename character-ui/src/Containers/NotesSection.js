import React, { useState } from 'react';

const NotesSection = () => {
  const [notes, setNotes] = useState('Your Notes Info');
  const onChange = (e) => { setNotes(e.target.value); };
  return (
    <section className="Notes">
      <h2 className="title is-2">{notes}</h2>
      <input
        type="text"
        className="input"
        placeholder="You Notes Info"
        onChange={onChange}
        value={notes}
      />
    </section>
  );
};

export default NotesSection;
