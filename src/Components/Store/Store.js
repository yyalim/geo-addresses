import React, { createContext, useReducer } from 'react';
import HereMapService from '../../Services/HereMapService';
import reducer from './reducer';

const initialState = {
  places: {}
}

const hereMapService = new HereMapService();

export default function Store({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      <MapContext.Provider value={hereMapService}>
        {children}
      </MapContext.Provider>
    </StoreContext.Provider>
  )
}

export const StoreContext = createContext(initialState);
export const MapContext = createContext();
