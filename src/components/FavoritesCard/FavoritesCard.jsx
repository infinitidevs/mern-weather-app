import React from 'react';
import { Link } from 'react-router-dom';

import {
  CityName,
  DegreeSign,
  ExtraCard,
  Left,
  Temperature,
  TemperatureWrapper,
} from './styles';

const FavoritesCard = ({ weather, cityIndex }) => {
  return (
    <Link to={`/favorites/${cityIndex}`}>
      <ExtraCard>
        <Left>
          <CityName>
            {weather.name}, {weather.country}
          </CityName>
          <TemperatureWrapper>
            <Temperature>{weather.temperature || '-'}</Temperature>
            <DegreeSign>º</DegreeSign>
          </TemperatureWrapper>
        </Left>
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
          alt={weather.main}
        />
      </ExtraCard>
    </Link>
  );
};

export default FavoritesCard;
