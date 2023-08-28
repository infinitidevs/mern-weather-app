import { Link } from 'react-router-dom';

import FavoritesCard from '../../components/FavoritesCard/FavoritesCard';
import LinkWrapper from '../../components/LinkWrapper/LinkWrapper';
import favoriteLocations from '../../constants/location';
import useFavoritesWeather from '../../hooks/useFavoritesWeather';
import Layout from '../../layout/Layout';
import { Title } from './styles';

const Favorites = () => {
  const { favoritesWeather, loading } = useFavoritesWeather(favoriteLocations);

  return (
    <Layout>
      <Title>Locations</Title>
      {loading ? (
        <h2>Loading Weather Data</h2>
      ) : (
        favoritesWeather?.map((locationWeather, index) => {
          return (
            <FavoritesCard
              weather={locationWeather}
              cityIndex={index}
              key={locationWeather.name}
            />
          );
        })
      )}
      <LinkWrapper>
        <Link to="/">⬅ Back to Day Weather</Link>
      </LinkWrapper>
    </Layout>
  );
};

export default Favorites;
