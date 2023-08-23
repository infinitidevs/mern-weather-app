import React from 'react';

import { CardCityInfoDate, CardCityInfoWrapper } from './styles';

const CardCityInfo = ({ weather }) => {
  return (
    <CardCityInfoWrapper>
      <h2>
        {weather.name}, {weather.country}
      </h2>
      <CardCityInfoDate>{weather.date}</CardCityInfoDate>
    </CardCityInfoWrapper>
  );
};

export default CardCityInfo;
