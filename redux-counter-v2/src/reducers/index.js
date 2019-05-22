import * as actions from '../actions';

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, { type, payload }) => {
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
    case actions.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case actions.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(result => result.id !== payload),
      };
    default:
      return state;
  }
};

export default reducer;
