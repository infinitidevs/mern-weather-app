import React from 'react';

import {
  CardWeatherInfoWrapper,
  CurrentTempWrapper,
  DegreeSign,
  MaxMinTempWrapper,
  Temperature,
  WeatherDescription,
} from './styles';

const CardWeatherInfo = ({ weather }) => {
  const iconSrc = weather ? `http://openweathermap.org/img/wn/${weather.icon}.png` : '';

  return (
    <CardWeatherInfoWrapper>
      <WeatherDescription>
        <img src={iconSrc} alt={weather.description} />
        <CurrentTempWrapper>
          <Temperature>
            <p>{weather.temperature}</p>
          </Temperature>
          <DegreeSign>
            <p>ºC</p>
          </DegreeSign>
        </CurrentTempWrapper>
        <MaxMinTempWrapper>
          <p>{weather.max_temp}º</p>
          <p>{weather.min_temp}º</p>
        </MaxMinTempWrapper>
      </WeatherDescription>
      <p>{weather.description}</p>
    </CardWeatherInfoWrapper>
  );
};

export default CardWeatherInfo;
