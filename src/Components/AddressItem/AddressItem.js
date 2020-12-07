import React from 'react';
import './AddressItem.css';

export default function AddressItem({ id, name, address }) {
  return (
    <div className="address-item">
      <h2 className="address-item__heading">{ name }</h2>
      <p className="address-item__content">{ address }</p>
    </div>
  );
}
