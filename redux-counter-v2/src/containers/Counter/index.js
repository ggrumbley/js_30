import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl';
import CounterOutput from '../../components/CounterOutput';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState(prevState => ({ counter: prevState.counter + 1 }));
        break;
      case 'dec':
        this.setState(prevState => ({ counter: prevState.counter - 1 }));
        break;
      case 'add':
        this.setState(prevState => ({ counter: prevState.counter + value }));
        break;
      case 'sub':
        this.setState(prevState => ({ counter: prevState.counter - value }));
        break;
    }
  };

  render() {
    const {
      ctr, onIncrementCounter, onDecrementCounter, onAddCounter, onSubtractCounter,
    } = this.props;
    return (
      <div>
        <CounterOutput value={ctr} />
        <CounterControl label="Increment" clicked={onIncrementCounter} />
        <CounterControl label="Decrement" clicked={onDecrementCounter} />
        <CounterControl label="Add 5" clicked={() => onAddCounter(5)} />
        <CounterControl label="Subtract 5" clicked={() => onSubtractCounter(5)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ctr: state.counter,
});

const mapDispatchToProps = dispatch => ({
  onIncrementCounter: () => dispatch({
    type: 'INCREMENT',
  }),
  onDecrementCounter: () => dispatch({
    type: 'DECREMENT',
  }),
  onAddCounter: payload => dispatch({
    type: 'ADD',
    payload,
  }),
  onSubtractCounter: payload => dispatch({
    type: 'SUBTRACT',
    payload,
  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
