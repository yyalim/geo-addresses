import React, { memo } from 'react';
import './AddressItem.css';

function areEqual(prevProps, nextProps) {
  return prevProps.id === nextProps.id &&
    prevProps.name === nextProps.name &&
    prevProps.address === nextProps.address
}

const AddressItem = memo(function({ id, name, address }) {
  return (
    <div className="address-item">
      <h2 className="address-item__heading">{ name }</h2>
      <p className="address-item__content">{ address }</p>
    </div>
  );
}, areEqual);

export default AddressItem;
