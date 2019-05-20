const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    case 'ADD':
      return {
        ...state,
        counter: state.counter + payload,
      };
    case 'SUBTRACT':
      return {
        ...state,
        counter: state.counter - payload,
      };
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    case 'DELETE_RESULT':
      return {
        ...state,
        results: state.results.filter(result => result.id !== payload),
      };
    default:
      return state;
  }
};

export default reducer;
