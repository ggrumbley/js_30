import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/CheckoutSummary';
import ContactData from '../../components/ContactData';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // ingredients: null,
      ingredients: {
        salad: 1,
        meat: 1,
        cheese: 1,
        bacon: 1,
      },
      totalPrice: 0,
    };
  }


  componentWillMount() {
    const { location } = this.props;

    const query = new URLSearchParams(location.search);
    const ingredients = {};
    const totalPrice = query.get('price') || null;

    if (query.get('price')) {
      query.delete('price');
    }

    // eslint-disable-next-line
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }

    this.setState({ ingredients, totalPrice });
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
    const { ingredients, totalPrice } = this.state;
    const { match } = this.props;
    return (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={`${match.path}/contact-data`}
          render={props => (<ContactData ingredients={ingredients} price={totalPrice} {...props} />)}
        />
      </div>
    );
  }
}

export default Checkout;
