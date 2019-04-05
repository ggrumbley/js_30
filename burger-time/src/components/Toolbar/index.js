import React from 'react';

import Logo from '../Logo';
import NavigationBar from '../NavigationBar';
import { BarToggle } from '../SideBar';

import styles from './Toolbar.module.css';

const Toolbar = ({ barToggleClicked }) => (
  <header className={styles.Toolbar}>
    <BarToggle clicked={barToggleClicked} />
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
      <NavigationBar />
    </nav>
  </header>
);

export default Toolbar;
