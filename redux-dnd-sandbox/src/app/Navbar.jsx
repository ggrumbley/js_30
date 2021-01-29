import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Redux DnD Playground</h1>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Current Project</Link>
            <Link to="/knight">Knight</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};
