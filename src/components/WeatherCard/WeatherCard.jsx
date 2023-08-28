import { Link } from 'react-router-dom';

import Layout from '../../layout/Layout';
import CardCityInfo from '../CardCityInfo/CardCityInfo';
import CardWeatherInfo from '../CardWeatherInfo/CardWeatherInfo';
import ExtraCardWrapper from '../ExtraCardWrapper/ExtraCardWrapper';
import Header from '../Header/Header';
import LinkWrapper from '../LinkWrapper/LinkWrapper';
import SunRiseSetCard from '../SunRiseSetCard/SunRiseSetCard';
import WeatherExtrasCard from '../WeatherExtrasCard/WeatherExtrasCard';

const WeatherCard = ({ weather, link }) => {
  return (
    <Layout>
      <Header />
      <article>
        <CardCityInfo weather={weather} />
        <CardWeatherInfo weather={weather} />
        <ExtraCardWrapper>
          <SunRiseSetCard
            weather={weather.feels_like}
            sign={'º'}
            image={{
              src: 'https://cdn.jsdelivr.net/gh/infinitidevs/mern-weather-app@main/src/assets/thermometer.svg',
              alt: 'Real Feel',
            }}
            text={'RealFeel'}
          />
          <WeatherExtrasCard weatherInfo="rain" weather={weather.rain} />
          <WeatherExtrasCard weatherInfo="wind" weather={weather.wind} />
          <WeatherExtrasCard weatherInfo="humidity" weather={weather.humidity} />
          <WeatherExtrasCard weatherInfo="visibility" weather={weather.visibility} />
          <WeatherExtrasCard weatherInfo="clouds" weather={weather.clouds} />
          <WeatherExtrasCard weatherInfo="snow" weather={weather.snow} />
          <SunRiseSetCard
            weather={weather.sunrise}
            image={{
              src: 'https://cdn.jsdelivr.net/gh/infinitidevs/mern-weather-app@main/src/assets/sunrise.svg',
              alt: 'Sunrise',
            }}
            text={'Sunrise'}
          />
          <SunRiseSetCard
            weather={weather.sunset}
            image={{
              src: 'https://cdn.jsdelivr.net/gh/infinitidevs/mern-weather-app@main/src/assets/sunset.svg',
              alt: 'Sunset',
            }}
            text={'Sunset'}
          />
        </ExtraCardWrapper>
        <LinkWrapper>
          <Link to={link}>5-day forecast →</Link>
        </LinkWrapper>
      </article>
    </Layout>
  );
};

const Weather = ({ weather, link }) => {
  return weather ? (
    <WeatherCard weather={weather} link={link} />
  ) : (
    <h2>We couldn&apos;t find your location</h2>
  );
};

export default Weather;
