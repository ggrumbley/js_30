import React, { Component } from 'react';

import Order from '../../components/Order';
import Spinner from '../../components/Spinner';
import api from '../../api';
import withErrorHandler from '../../components/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    api
      .get('/orders.json')
      .then((res) => {
        const fetchedOrders = [];

        Object.keys(res.data).forEach((key) => {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        });

        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line no-console
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading, orders } = this.state;
    return (
      <div>
        { loading
          ? <Spinner />

          : orders.map(order => (
            <Order key={order.id} ingredients={order.ingredients} price={order.price} />
          ))
        }
      </div>
    );
  }
}

export default withErrorHandler(Orders, api);
