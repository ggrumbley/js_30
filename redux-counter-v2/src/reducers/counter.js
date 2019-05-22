import * as actions from '../actions';

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actions.ADD:
      return {
        ...state,
        counter: state.counter + payload,
      };
    case actions.SUBTRACT:
      return {
        ...state,
        counter: state.counter - payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
