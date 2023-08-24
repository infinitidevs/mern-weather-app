import React from 'react';

import CardWeatherExtra from '../CardWeatherExtra/CardWeatherExtra';
import { CardLeft, CardRight, CardTemperature } from './styles';

const DayForecastCard = ({ weather }) => {
  return (
    <CardWeatherExtra>
      <CardLeft>
        <h3>{weather.date}</h3>
        <p>{weather.description}</p>
      </CardLeft>
      <CardRight>
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
          alt={weather.main}
        />
        <CardTemperature>
          <p>{weather.day_temp} º</p>
          <p>{weather.night_temp} º</p>
        </CardTemperature>
      </CardRight>
    </CardWeatherExtra>
  );
};

export default DayForecastCard;
