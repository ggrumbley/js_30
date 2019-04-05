import React from 'react';

import styles from './NavItem.module.css';

const NavItem = ({ link, active, children }) => (
  <li className={styles.NavigationItem}>
    <a href={link} className={active && styles.active}>
      {children}
    </a>
  </li>
);

export default NavItem;
