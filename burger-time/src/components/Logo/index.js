import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const Logo = ({ height }) => (
  <div className={styles.logo} style={{ height }}>
    <img src={burgerLogo} alt="BurgerTime" />
  </div>
);

export default Logo;
