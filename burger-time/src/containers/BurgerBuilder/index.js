import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
import Modal from '../../components/Modal';
import OrderSummary from '../../components/OrderSummary';
import Spinner from '../../components/Spinner';
import withErrorHandler from '../../components/withErrorHandler';

import api from '../../api';

import * as actions from '../../actions';

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      purchasing: false,
      isLoading: false,
      error: false,
    };
  }

  componentDidMount() {
    api
      .get('ingredients.json')
      .then((res) => {
        this.setState({ ingredients: res.data });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  updatePurchaseState = (ingredients) => {
    const total = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);

    return total > 0;
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  // eslint-disable-next-line
  purchaseContinueHandler = () => {
    this.setState({ isLoading: true });
    const { history } = this.props;
    history.push('/checkout');
  };

  render() {
    const {
      purchasing, isLoading, error,
    } = this.state;

    const {
      ingredients, onIngredientAdded, onIngredientRemoved, totalPrice,
    } = this.props;

    const disabledInfo = { ...ingredients };

    Object.keys(disabledInfo).forEach((key) => {
      disabledInfo[key] = disabledInfo[key] <= 0;
    });

    return (
      <Fragment>
        {error && <p>Ingredients could not be loaded.</p>}
        <Modal show={purchasing} modalClosed={this.purchaseCancelHandler}>
          {isLoading || !ingredients ? (
            <Spinner />
          ) : (
            <OrderSummary
              ingredients={ingredients}
              price={totalPrice}
              purchaseCancelled={this.purchaseCancelHandler}
              purchaseContinued={this.purchaseContinueHandler}
            />
          )}
        </Modal>
        {ingredients && !error ? (
          <Fragment>
            <Burger ingredients={ingredients} />
            <BuildControls
              ingredientAdded={onIngredientAdded}
              ingredientRemoved={onIngredientRemoved}
              disabled={disabledInfo}
              purchasable={this.updatePurchaseState(ingredients)}
              ordered={this.purchaseHandler}
              price={totalPrice}
            />
          </Fragment>
        ) : (
          <Spinner />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  totalPrice: state.totalPrice,
});

const mapDispatchToProps = dispatch => ({
  onIngredientAdded: ingredientName => dispatch({
    type: actions.ADD_INGREDIENT,
    ingredientName,
  }),
  onIngredientRemoved: ingredientName => dispatch({
    type: actions.REMOVE_INGREDIENT,
    ingredientName,
  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withErrorHandler(BurgerBuilder, api));
