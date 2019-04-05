import React from 'react';

import BuildControl from './BuildControl';
import { CONTROLS } from '../../constants';

import styles from './BuildControls.module.css';

const BuildControls = ({
  disabled,
  price,
  ingredientAdded,
  ingredientRemoved,
  ordered,
  purchasable,
}) => (
  <div className={styles.BuildControls}>
    <p>
      Current Price:
      <strong>{price.toFixed(2)}</strong>
    </p>
    {CONTROLS.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => ingredientAdded(ctrl.type)}
        removed={() => ingredientRemoved(ctrl.type)}
        disabled={disabled[ctrl.type]}
      />
    ))}
    <button
      type="button"
      className={styles.OrderButton}
      disabled={!purchasable}
      onClick={ordered}
    >
      ORDER NOW
    </button>
  </div>
);

export default BuildControls;
