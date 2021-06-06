import React, { createContext, useReducer, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import produce from 'immer';

import * as C from '../constants';

export const INITIAL_STATE = {
  value: 1984,
};

export const storeReducer = produce((draft, action) => {
  switch (action.type) {
    case C.INCREMENT:
      draft.value += 1;
      break;
    case C.DECREMENT:
      draft.value -= 1;
      break;
    default:
      throw new Error('An invalid action type has been passed');
  }
}, INITIAL_STATE);

/*
  Setup Store Provider
  Setup useStore Context
  Export Both
*/
const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // Get state and dispatch from Reacts new API useReducer.
  const [state, dispatch] = useReducer(storeReducer, INITIAL_STATE);

  const storeValue = useMemo(() => {
    // Debug Logging
    // console.info('STATE =>', state);
    // console.info('DISPATCH =>', dispatch);

    return { state, dispatch };
  }, [state, dispatch]);

  // Render state, dispatch and special case actions
  return <StoreContext.Provider value={storeValue}>{children}</StoreContext.Provider>;
};

export const useStore = () => useContext(StoreContext);

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
