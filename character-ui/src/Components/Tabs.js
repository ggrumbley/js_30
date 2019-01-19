import React from 'react';

const Tabs = () => (
  <div className="tabs is-centered">
    <ul>
      <li className="is-active">
        <a className="mdi mdi-sword-cross" /> {/* eslint-disable-line */}
      </li>
      <li>
        <a className="mdi mdi-shield-account" /> {/* eslint-disable-line */}
      </li>
      <li>
        <a className="mdi mdi-treasure-chest" /> {/* eslint-disable-line */}
      </li>
      <li>
        <a className="mdi mdi-book-open" /> {/* eslint-disable-line */}
      </li>
      <li>
        <a className="mdi mdi-text" /> {/* eslint-disable-line */}
      </li>
    </ul>
  </div>
);

export default Tabs;
