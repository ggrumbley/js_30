import React from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngredient.module.css';

const BurgerIngredient = ({ type }) => {
  switch (type) {
    case 'bread-bottom':
      return <div className={styles.BreadBottom} />;
    case 'bread-top':
      return (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1} />
          <div className={styles.Seeds2} />
        </div>
      );
    case 'meat':
      return <div className={styles.Meat} />;
    case 'cheese':
      return <div className={styles.Cheese} />;
    case 'bacon':
      return <div className={styles.Bacon} />;
    case 'salad':
      return <div className={styles.Salad} />;
    default:
      return null;
  }
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
