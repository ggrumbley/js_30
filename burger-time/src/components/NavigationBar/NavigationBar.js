import React from 'react';

import styles from './NavigationBar.module.css';
import NavItem from './NavItem';

const NavigationBar = () => (
  <ul className={styles.NavigationBar}>
    <NavItem link="/" active>
      Burger Builder
    </NavItem>
    <NavItem link="/">
      Checkout
    </NavItem>
  </ul>
);

export default NavigationBar;
