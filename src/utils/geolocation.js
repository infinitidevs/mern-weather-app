function success(position) {
  const geoPosition = { lat: position.coords.latitude, lon: position.coords.longitude };
  return geoPosition;
}

function error() {
  throw new Error('Sorry, no position available.');
}

const getNavigatorGeolocation = () => {
  if ('geolocation' in navigator) {
    navigator.geolocation.watchPosition(success, error);
    return location;
  }
  throw new Error('Geolocation is not supported by your browser');
};

export default getNavigatorGeolocation;
