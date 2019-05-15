import React from 'react';

import styles from './Order.module.css';

const order = ({ ingredients, price }) => {
  const orderIngredients = [];

  // eslint-disable-next-line
  for (const ingredientName in ingredients) {
    orderIngredients.push({
      name: ingredientName,
      amount: ingredients[ingredientName],
    });
  }

  return (
    <div className={styles.Order}>
      <p>
        Ingredients:
        {
          orderIngredients.map(ig => (
            <span
              style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px',
              }}
              key={ig.name}
            >
              {ig.name}
              {' '}
              (
              {ig.amount}
              )
            </span>
          ))
        }
      </p>
      {
        price && (
          <p>
            Price:
            {' '}
            <strong>
              USD
              {' '}
              {Number.parseFloat(price).toFixed(2)}
            </strong>
          </p>
        )
      }
    </div>
  );
};

export default order;
