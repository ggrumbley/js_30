import React from 'react';

import styles from './Button.module.css';

const button = ({
  btnType, children, clicked, disabled, type,
}) => (
  // eslint-disable-next-line
  <button
    disabled={disabled}
    type={type || 'button'}
    className={`${styles.Button} ${styles[btnType]}`}
    onClick={clicked}
  >
    {children}
  </button>
);

export default button;
