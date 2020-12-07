import React, { useContext } from 'react';
import { StoreContext } from '../Store';
import AddressItem from '../AddressItem';
import './AddressList.css';

export default function AddressList() {
  const [state] = useContext(StoreContext);

  return (
    <div className="address-list">
      {
        Object.keys(state.places)
          .map(id => (
            <AddressItem
              key={id}
              id={id}
              name={state.places[id].Name}
              address={state.places[id].address.label}
            />
          ))
      }
    </div>
  )
}
