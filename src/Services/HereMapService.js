const API_KEY = 'HahqP9WfKTjicSg1b5lDRLDdQ1L8BFLqQQmNknbUBZs';

export default class HereMapService {
  constructor() {
    this.H = window.H;

    this.platform = new this.H.service.Platform({
      'apikey': `${API_KEY}`
    });

    this.service = this.platform.getSearchService();
  }

  initializeMap(mapRef) {
    const defaultLayers = this.platform.createDefaultLayers();
    this.hMap = new this.H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 52.5, lng: 13.4 },
      zoom: 13,
      pixelRatio: window.devicePixelRatio || 1
    });

    // behaviour
    new this.H.mapevents.Behavior(new this.H.mapevents.MapEvents(this.hMap));

    // ui
    this.ui = this.H.ui.UI.createDefault(this.hMap, defaultLayers);

    return this.hMap;
  }

  reverseGeocode(coordinate) {
    return new Promise((resolve, reject) => {
      this.service.reverseGeocode(
        { at: `${coordinate.Latitude},${coordinate.Longitude}` },
        result => resolve({...result.items[0], ...coordinate}),
        error => reject(error)
      )
    });
  }

  getAddresses(coordinates) {
    return new Promise((resolve, reject) => {
      try {
        const reverseGeocodePromises = coordinates
          .map(async coordinate => await this.reverseGeocode(coordinate))

        Promise.all(reverseGeocodePromises).then(resolve)
      } catch(error) {
        reject(error)
      }
    });
  }

  addBubbles(places) {
    places.forEach(place => {
      this.ui.addBubble(new this.H.ui.InfoBubble(place.position, {
        content: `<p><b>${place.Name}</b>, ${place.address.label}</p>`
      }));
    })
  }
}
