import React from 'react';

import extrasLogosSVGPaths from '../../constants/weather';
import { CardWeatherExtraCard, Icon, IconWrapper } from './styles';

const WeatherExtrasCard = ({ weatherInfo, weather }) => {
  const cardTitle = extrasLogosSVGPaths[weatherInfo].title;
  const logoPath = extrasLogosSVGPaths[weatherInfo].path;
  const weatherUnits = extrasLogosSVGPaths[weatherInfo].units;

  if (!weather) {
    return null;
  }

  return (
    <CardWeatherExtraCard>
      <IconWrapper>
        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d={logoPath} />
        </Icon>
      </IconWrapper>
      <article>
        <p>{cardTitle}</p>
        <p>
          {weather} {weatherUnits}
        </p>
      </article>
    </CardWeatherExtraCard>
  );
};

export default WeatherExtrasCard;
