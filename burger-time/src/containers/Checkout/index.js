import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/CheckoutSummary';
import ContactData from '../../components/ContactData';

const Checkout = ({ history, match, ingredients }) => {
  const checkoutCancelledHandler = () => {
    history.goBack();
  };

  const checkoutContinuedHandler = () => {
    history.replace('/checkout/contact-data');
  };

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        checkoutCancelled={checkoutCancelledHandler}
        checkoutContinued={checkoutContinuedHandler}
      />
      <Route
        path={`${match.path}/contact-data`}
        component={ContactData}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  ingredients: state.ingredients,
});

export default connect(mapStateToProps)(Checkout);
