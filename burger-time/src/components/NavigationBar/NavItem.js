import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';

const NavItem = ({ link, children }) => (
  <li className={styles.NavigationItem}>
    <NavLink to={link} exact activeClassName={styles.active}>
      {children}
    </NavLink>
  </li>
);

export default NavItem;
