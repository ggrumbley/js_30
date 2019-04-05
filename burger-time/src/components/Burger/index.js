import React from 'react';

import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient';

const Burger = ({ ingredients }) => {
  const requestedIngredients = Object.keys(ingredients)
    .map(igKey => (
      [...Array(ingredients[igKey])].map((_, i) => (
        // eslint-disable-next-line
        <BurgerIngredient key={igKey + i} type={igKey} />
      ))
    ))
    .reduce((arr, el) => (arr.concat(el)), []);

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {
        (requestedIngredients.length && requestedIngredients)
        || <p>Please start adding ingredients!</p>
      }
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
