import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div className='widget'>
        <h2>Counter</h2>
        <div className='counter'>
          <h1>{this.props.count}</h1>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ count: state.count });


export default connect(mapStateToProps)(Counter);