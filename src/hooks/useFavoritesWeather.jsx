import { useEffect, useState } from 'react';

import { getWeatherByLocation } from '../api/api';

const useFavoritesWeather = (favorites) => {
  const [favoritesWeather, setFavoritesWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFavoritesWeather = async () => {
    setLoading(true);
    const favoritesApiWeather = await Promise.all(
      favorites.map((favoriteLocation) => {
        try {
          return getWeatherByLocation(favoriteLocation.location);
        } catch (e) {
          throw new Error('Something went wrong fetching Favorites Weather Data');
        }
      }),
    );
    setFavoritesWeather(favoritesApiWeather);
    setLoading(false);
  };

  useEffect(() => {
    getFavoritesWeather();
  }, []);

  return { favoritesWeather, loading };
};

export default useFavoritesWeather;
