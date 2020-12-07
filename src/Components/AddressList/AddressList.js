import React, { useContext } from 'react';
import { StoreContext } from '../Store';
import AddressItem from '../AddressItem';
import './AddressList.css';

export default function AddressList() {
  const [state] = useContext(StoreContext);

  return (
    <div className="address-list">
      {
        Object.keys(state.addresses)
          .map(addressId => (
            <AddressItem
              key={addressId}
              id={addressId}
              name={state.addresses[addressId].Name}
              address={state.addresses[addressId].address.label}
            />
          ))
      }
    </div>
  )
}
