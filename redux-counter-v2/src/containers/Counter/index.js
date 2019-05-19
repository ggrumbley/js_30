import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl';
import CounterOutput from '../../components/CounterOutput';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case 'dec':
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case 'add':
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case 'sub':
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    const { ctr } = this.props;
    return (
      <div>
        <CounterOutput value={ctr} />
        <CounterControl label="Increment" clicked={() => this.counterChangedHandler('inc')} />
        <CounterControl label="Decrement" clicked={() => this.counterChangedHandler('dec')} />
        <CounterControl label="Add 5" clicked={() => this.counterChangedHandler('add', 5)} />
        <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler('sub', 5)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ctr: state.counter,
});

export default connect(mapStateToProps)(Counter);
