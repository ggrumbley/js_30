import React, { createContext, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';

import { INITIAL_STATE } from '../constants';

import storeReducer from './storeReducer';

const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
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

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StoreContext, StoreProvider };
