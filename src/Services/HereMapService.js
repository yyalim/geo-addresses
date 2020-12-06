const API_KEY = 'HahqP9WfKTjicSg1b5lDRLDdQ1L8BFLqQQmNknbUBZs';

export default class HereMapService {
  constructor() {
    const H = window.H;

    this.platform = new H.service.Platform({
      'apikey': `${API_KEY}`
    });

    this.service = this.platform.getSearchService();
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
}
