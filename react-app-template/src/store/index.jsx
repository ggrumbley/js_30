import React, { createContext, useReducer, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import { storeReducer, initialState } from './storeReducer';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // Get state and dispatch from Reacts new API useReducer.
  const [state, dispatch] = useReducer(storeReducer, initialState);

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
