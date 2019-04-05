import React from 'react';

import styles from './BuildControl.module.css';

const BuildControl = ({
  added,
  disabled,
  label,
  removed,
}) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{label}</div>
    <button
      type="button"
      className={styles.Less}
      onClick={removed}
      disabled={disabled}
    >
      Less
    </button>
    <button
      type="button"
      className={styles.More}
      onClick={added}
    >
      More
    </button>
  </div>
);

export default BuildControl;
