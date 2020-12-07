import React, { useEffect, useContext, useState } from 'react';
import { StoreContext, MapContext, ADD_PLACE } from '../Store';
import DropZone from '../DropZone';
import AddressList from '../AddressList';
import LoadingIndicator from '../LoadingIndicator';
import Map from '../Map';
import parseCoordinatesFromJSONFiles from '../../Utils/parseCoordinatesFromJSONFiles';
import './AppContainer.css';

export default function AppContainer() {
  const [state, dispatch] = useContext(StoreContext);
  const hereMapService = useContext(MapContext);
  const [isLoading, setIsLoading] = useState(false);

  // prevent drag and drop API outside of JSON reader
  useEffect(() => {
    const preventHandler = event => event.preventDefault();
    window.addEventListener("dragover", preventHandler, false);
    window.addEventListener("drop", preventHandler, false);
  }, []);

  const handleDrop = async (files) => {
    try {
      setIsLoading(true);
      const coordintes = await parseCoordinatesFromJSONFiles(files);
      const places = await hereMapService.getPlaces(coordintes);
      hereMapService.addBubbles(places);

      places.forEach(place => dispatch({
        type: ADD_PLACE,
        payload: { [place.id]: place }
      }));
    } catch(error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="app-container">
      <div className="places">
        <h1 className="places__heading">Places</h1>
        {isLoading && <LoadingIndicator />}
        {!isLoading && Object.keys(state.places).length > 0 && <AddressList />}
        {!isLoading && !Object.keys(state.places).length && <DropZone onDrop={handleDrop} />}
      </div>
      <Map />
    </div>
  );
}
