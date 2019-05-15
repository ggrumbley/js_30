import React, { Component, Fragment } from 'react';

import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
import Modal from '../../components/Modal';
import OrderSummary from '../../components/OrderSummary';
import Spinner from '../../components/Spinner';
import withErrorHandler from '../../components/withErrorHandler';

import api from '../../api';

import { INGREDIENT_PRICES } from '../../constants';

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: null,
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      isLoading: false,
      error: false,
    };
  }

  componentDidMount() {
    api
      .get('ingredients.json')
      .then((res) => { this.setState({ ingredients: res.data }); })
      .catch((error) => { this.setState({ error }); });
  }

  updatePurchaseState = (ingredients) => {
    const total = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => (sum + el), 0);

    this.setState({ purchasable: total > 0 });
  };

  addIngredientHandler = (type) => {
    const { ingredients, totalPrice } = this.state;
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const { ingredients, totalPrice } = this.state;
    const oldCount = ingredients[type];

    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => { this.setState({ purchasing: true }); };

  purchaseCancelHandler = () => { this.setState({ purchasing: false }); };

  // eslint-disable-next-line
  purchaseContinueHandler = () => {
    this.setState({ isLoading: true });

    const { ingredients, totalPrice } = this.state;
    const { history } = this.props;
    const queryParams = [];

    Object.entries(ingredients).forEach(([key, value]) => {
      queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    });

    queryParams.push(`price=${totalPrice}`);
    const queryString = queryParams.join('&');

    history.push({
      pathname: '/checkout',
      search: `?${queryString}`,
    });
  };

  render() {
    const {
      ingredients,
      purchasable,
      purchasing,
      totalPrice,
      isLoading,
      error,
    } = this.state;

    const disabledInfo = { ...ingredients };
    Object.keys(disabledInfo).forEach((key) => { disabledInfo[key] = disabledInfo[key] <= 0; });

    return (
      <Fragment>
        {error && <p>Ingredients could not be loaded.</p>}
        <Modal
          show={purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {
            isLoading || !ingredients
              ? <Spinner />
              : (
                <OrderSummary
                  ingredients={ingredients}
                  price={totalPrice}
                  purchaseCancelled={this.purchaseCancelHandler}
                  purchaseContinued={this.purchaseContinueHandler}
                />
              )
          }
        </Modal>
        { ingredients && !error
          ? (
            <Fragment>
              <Burger ingredients={ingredients} />
              <BuildControls
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={purchasable}
                ordered={this.purchaseHandler}
                price={totalPrice}
              />
            </Fragment>
          )
          : <Spinner />
        }
      </Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, api);
