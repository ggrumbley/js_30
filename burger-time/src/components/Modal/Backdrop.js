import React from 'react';

import styles from './Backdrop.module.css';

const backdrop = ({ show, clicked }) => (
  // eslint-disable-next-line
  show && <div className={styles.Backdrop} onClick={clicked} />
);

export default backdrop;
