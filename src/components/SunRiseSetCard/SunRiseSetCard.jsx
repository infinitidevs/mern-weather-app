import React from 'react';

import { ImgWrapper, SunriseCard } from './styles';

const SunRiseSetCard = ({ weather, sign, image, text }) => {
  return (
    <SunriseCard>
      <ImgWrapper>
        <img src={image.src} alt={image.alt} />
      </ImgWrapper>
      <article>
        <p>{text}</p>
        <span>{weather}</span>
        <span>{sign}</span>
      </article>
    </SunriseCard>
  );
};

export default SunRiseSetCard;
