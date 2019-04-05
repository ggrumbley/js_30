import React from 'react';

import styles from './BarToggle.module.css';

const BarToggle = ({ clicked }) => (
  // eslint-disable-next-line
  <div className={styles.BarToggle} onClick={clicked}>
    <div />
    <div />
    <div />
  </div>
);

export default BarToggle;
