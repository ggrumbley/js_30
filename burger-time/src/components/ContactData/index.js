import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../Button';
import Spinner from '../Spinner';
import Input from '../Input';

import api from '../../api';
import { ORDER_FORM } from '../../constants';
import styles from './ContactData.module.css';

class ContactData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderForm: ORDER_FORM,
      formIsValid: false,
      loading: false,
    };
  }

  orderHandler = (event) => {
    const { ingredients, history, price } = this.props;
    const { orderForm } = this.state;

    event.preventDefault();
    this.setState({ loading: true });

    const orderData = Object.entries(orderForm).reduce(
      (result, [formEl, formVal]) => ({ ...result, ...{ [formEl]: formVal.value } }),
      {},
    );

    const order = {
      ingredients,
      price,
      orderData,
    };

    api
      .post('orders.json', order)
      .then((res) => {
        console.log(res); // eslint-disable-line no-console
        this.setState({ loading: false });
        history.push('/');
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
        this.setState({ loading: false });
      });
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };

  inputChangedHandler = (event, inputID) => {
    const { orderForm } = this.state;

    const updatedOrderForm = {
      ...orderForm,
    };

    const updatedFormElement = {
      ...updatedOrderForm[inputID],
    };

    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value, updatedFormElement.validation,
    );
    updatedFormElement.touched = true;
    updatedOrderForm[inputID] = updatedFormElement;

    let formIsValid = true;

    Object.values(updatedOrderForm).forEach((element) => {
      formIsValid = element.valid && formIsValid;
    });

    this.setState({ orderForm: updatedOrderForm, formIsValid });
  };

  render() {
    const { formIsValid, loading, orderForm } = this.state;

    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        {loading ? (
          <Spinner />
        ) : (
          <form onSubmit={this.orderHandler}>
            {Object.entries(orderForm).map(([id, config]) => (
              <Input
                key={id}
                elementType={config.elementType}
                elementConfig={config.elementConfig}
                value={config.value}
                invalid={!config.valid}
                shouldValidate={config.validation}
                touched={config.touched}
                changed={event => this.inputChangedHandler(event, id)}
              />
            ))}
            <Button btnType="Success" disabled={!formIsValid} type="submit">
              ORDER
            </Button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  price: state.totalPrice,
});

export default connect(mapStateToProps)(ContactData);
