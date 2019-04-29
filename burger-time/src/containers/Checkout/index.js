import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
  }

  checkoutCancelledHandler = () => {
    const { history } = this.props;

    history.goBack();
  }

  checkoutContinuedHandler = () => {
    const { history } = this.props;
    history.replace('/checkout/contact-data');
  }

  render() {
    return (
      <div>Checkout</div>
    );
  }
}

export default Checkout;
