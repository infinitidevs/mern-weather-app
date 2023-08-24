import { useEffect, useState } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState({});

  const success = (position) => {
    const getLocation = { lat: position.coords.latitude, lon: position.coords.longitude };
    setLocation(getLocation);
  };

  const error = () => {
    alert('You need to allow location service');
    throw new Error('Sorry, no positi9n available.');
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(success, error);
      return;
    }
    throw new Error('Geolocation, is not supported by your browser.');
  }, []);
  return { location };
};

export default useGeolocation;
