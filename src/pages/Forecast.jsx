import { Link, useParams } from 'react-router-dom';

import DayForecastCard from '../components/DayForecastCard/DayForecastCard';
import LinkWrapper from '../components/LinkWrapper/LinkWrapper';
import favoriteLocations from '../constants/location';
import useForecastWeather from '../hooks/useForecastWeather';
import useGeolocation from '../hooks/useGeolocation';
import Layout from '../layout/Layout';
import { Title } from './Favorites/styles';

const Forecast = () => {
  const { cityIndex } = useParams();
  const { location } = useGeolocation();
  const selectedLocation = cityIndex ? favoriteLocations[cityIndex].location : location;
  const backLink = cityIndex ? `/favorites/${cityIndex}` : '/';

  const { weather, loading } = useForecastWeather(selectedLocation);

  return loading ? (
    <h2>Recovering Forecast Data</h2>
  ) : (
    <Layout>
      <Title>
        {weather[0]?.name}, {weather[0]?.country}
      </Title>
      {weather?.map((dayWeather) => {
        return <DayForecastCard weather={dayWeather} key={dayWeather.date} />;
      })}
      <LinkWrapper>
        <Link to={backLink}>← Back to Day Weather</Link>
      </LinkWrapper>
    </Layout>
  );
};

export default Forecast;
