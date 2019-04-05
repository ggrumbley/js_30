import React, { Fragment } from 'react';

import Button from '../Button';

const OrderSummary = ({
  ingredients,
  price,
  purchaseCancelled,
  purchaseContinued,
}) => (
  <Fragment>
    <h3>Your Order</h3>
    <p>A delicious burger with the following ingredients:</p>
    <ul>
      {
        Object.keys(ingredients).map(igKey => (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>
            {': '}
            {ingredients[igKey]}
          </li>
        ))
      }
    </ul>
    <p>
      <strong>
        {'Total Price: '}
        {price.toFixed(2)}
      </strong>
    </p>
    <p>Continue to Checkout?</p>
    <Button btnType="Danger" clicked={purchaseCancelled}>
      CANCEL
    </Button>
    <Button btnType="Success" clicked={purchaseContinued}>
      CONTINUE
    </Button>
  </Fragment>
);

export default OrderSummary;
