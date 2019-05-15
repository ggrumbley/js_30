import React, { Component } from 'react';

import Button from '../Button';
import Spinner from '../Spinner';
import api from '../../api';
import styles from './ContactData.module.css';

class ContactData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // name: '',
      // email: '',
      // address: {
      //   street: '',
      //   postalCode: '',
      // },
      loading: false,
    };
  }

  orderHandler = (event) => {
    const { ingredients, history, price } = this.props;
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients,
      price,
      customer: {
        name: 'Gary G',
        address: {
          street: 'Teststreet 1',
          zipCode: '92116',
          country: 'USA',
        },
        email: 'test@test.com',
      },
      deliveryMethod: 'fastest',
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

  render() {
    const { loading } = this.state;

    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        { loading
          ? <Spinner />
          : (
            <form>
              <input className={styles.Input} type="text" name="name" placeholder="Your Name" />
              <input className={styles.Input} type="email" name="email" placeholder="Your Mail" />
              <input className={styles.Input} type="text" name="street" placeholder="Street" />
              <input className={styles.Input} type="text" name="postal" placeholder="Postal Code" />
              <Button btnType="Success" clicked={this.orderHandler}>
                ORDER
              </Button>
            </form>
          )
        }
      </div>
    );
  }
}

export default ContactData;
