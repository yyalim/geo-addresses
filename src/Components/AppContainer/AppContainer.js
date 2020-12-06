import React, { useEffect } from 'react';
import DropZone from '../DropZone';
import parseCoordinatesFromJSONFiles from '../../Utils/parseCoordinatesFromJSONFiles';
import './AppContainer.css';

export default function AppContainer() {
  // prevent drag and drop API outside of JSON reader
  useEffect(() => {
    const preventHandler = event => event.preventDefault();
    window.addEventListener("dragover", preventHandler, false);
    window.addEventListener("drop", preventHandler, false);
  }, []);

  const handleDrop = async (files) => {
    const coordintes = await parseCoordinatesFromJSONFiles(files);
    console.log(coordintes)
  }

  return (
    <div className="app-container">
      <div className="places">
        <h1 className="places__heading">Places</h1>
        <DropZone onDrop={handleDrop} />
      </div>
    </div>
  );
}
