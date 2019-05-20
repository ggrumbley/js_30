const initialState = {
  counter: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
      };
    case 'ADD':
      return {
        counter: state.counter + payload,
      };
    case 'SUBTRACT':
      return {
        counter: state.counter - payload,
      };
    default:
      return state;
  }
};

export default reducer;
