import React from 'react';
import { connect } from 'react-redux';

import CounterControl from '../CounterControl';
import CounterOutput from '../CounterOutput';
import * as actions from '../../actions';

const Counter = ({
  ctr,
  results,
  onIncrementCounter,
  onDecrementCounter,
  onAddCounter,
  onSubtractCounter,
  onStoreResult,
  onDeleteResult,
}) => (
  <div>
    <CounterOutput value={ctr} />
    <CounterControl label="Increment" clicked={onIncrementCounter} />
    <CounterControl label="Decrement" clicked={onDecrementCounter} />
    <CounterControl label="Add 5" clicked={() => onAddCounter(5)} />
    <CounterControl label="Subtract 5" clicked={() => onSubtractCounter(5)} />
    <hr />
    <button type="button" onClick={() => onStoreResult(ctr)}>Store Result</button>
    <ul>
      {results.map(result => (
        <li key={result.id} onClick={() => onDeleteResult(result.id)}>
          {result.value}
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  ctr: state.counter.counter,
  results: state.result.results,
});

const mapDispatchToProps = dispatch => ({
  onIncrementCounter: () => dispatch({
    type: actions.INCREMENT,
  }),
  onDecrementCounter: () => dispatch({
    type: actions.DECREMENT,
  }),
  onAddCounter: payload => dispatch({
    type: actions.ADD,
    payload,
  }),
  onSubtractCounter: payload => dispatch({
    type: actions.SUBTRACT,
    payload,
  }),
  onStoreResult: payload => dispatch({
    type: actions.STORE_RESULT,
    payload,
  }),
  onDeleteResult: payload => dispatch({
    type: actions.DELETE_RESULT,
    payload,
  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
