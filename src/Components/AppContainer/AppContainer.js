import React, { useEffect, useContext } from 'react';
import { StoreContext, ADD_ADDRESS } from '../Store';
import DropZone from '../DropZone';
import HereMapService from '../../Services/HereMapService';
import parseCoordinatesFromJSONFiles from '../../Utils/parseCoordinatesFromJSONFiles';
import './AppContainer.css';

export default function AppContainer() {
  const [state, dispatch] = useContext(StoreContext);

  // prevent drag and drop API outside of JSON reader
  useEffect(() => {
    const preventHandler = event => event.preventDefault();
    window.addEventListener("dragover", preventHandler, false);
    window.addEventListener("drop", preventHandler, false);
  }, []);

  const handleDrop = async (files) => {
    try {
      const coordintes = await parseCoordinatesFromJSONFiles(files);
      const hereMapService = new HereMapService();
      const addresses = await hereMapService.getAddresses(coordintes);

      addresses.forEach(address => dispatch({
        type: ADD_ADDRESS,
        payload: { [address.id]: address }
      }));
    } catch(error) {
      alert(error);
    }
  }

  return (
    <div className="app-container">
      <div className="places">
        <h1 className="places__heading">Places</h1>
          { Object.keys(state.addresses).length ? 'list' : <DropZone onDrop={handleDrop} /> }
      </div>
    </div>
  );
}
