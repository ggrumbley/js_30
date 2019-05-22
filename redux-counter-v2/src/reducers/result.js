import * as actions from '../actions';

const initialState = {
  results: [],
};

const resultReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: payload }),
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

export default resultReducer;
