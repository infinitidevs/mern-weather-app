import { useParams } from 'react-router-dom';

import Weather from '../components/WeatherCard/WeatherCard';
import favoriteLocations from '../constants/location';
import useGeolocation from '../hooks/useGeolocation';
import useLocationWeather from '../hooks/useLocationWeather';

const LocalWeather = () => {
  const { cityIndex } = useParams();
  const { location } = useGeolocation();
  const selectedLocation = cityIndex ? favoriteLocations[cityIndex].location : location;
  const { weather, loading } = useLocationWeather(selectedLocation);
  const forecastLink = cityIndex ? `/forecast/${cityIndex}` : `/forecast/`;

  return loading ? (
    <h2>Loading Weather Data</h2>
  ) : (
    <Weather weather={weather} link={forecastLink} />
  );
};

export default LocalWeather;
