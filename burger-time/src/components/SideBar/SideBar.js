import React, { Fragment } from 'react';

import Logo from '../Logo';
import NavigationBar from '../NavigationBar';
import styles from './SideBar.module.css';
import { Backdrop } from '../Modal';

const SideBar = ({ open, closed }) => (
  <Fragment>
    <Backdrop show={open} clicked={closed} />
    <div className={`${styles.SideBar} ${open ? styles.Open : styles.Close}`}>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationBar />
      </nav>
    </div>
  </Fragment>
);

export default SideBar;
