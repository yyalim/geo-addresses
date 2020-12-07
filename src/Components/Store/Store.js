import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  addresses: {}
}

export default function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export const StoreContext = createContext(initialState);