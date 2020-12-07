import React, { useRef, useLayoutEffect, useContext } from 'react';
import { MapContext } from '../Store';

export default function Map() {
  const hereMapService = useContext(MapContext);
  const mapRef = useRef(null);

  useLayoutEffect(() => {
    // `mapRef.current` will be `undefined` when this hook first runs; edge case that
    if (!mapRef.current) return;

    const hMap = hereMapService.initializeMap(mapRef);

    // This will act as a cleanup to run once this hook runs again.
    // This includes when the component un-mounts
    return () =>hMap.dispose();
  }, [hereMapService, mapRef]);

  return (
    <div
      className="map"
      ref={mapRef}
      style={{ width: '100%', height: '100%' }}
    >
    </div>
  )
}
