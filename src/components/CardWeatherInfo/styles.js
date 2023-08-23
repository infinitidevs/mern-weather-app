import { styled } from 'styled-components';

export const CardWeatherInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--ah-section-padding);
  padding-bottom: 3rem;
  gap: 1rem;
`;

export const WeatherDescription = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: var(--ah-subtitle);
  line-height: var(--ah-subtitle-leading);
  gap: 4px;

  > img {
    height: 50px;
    width: auto;
  }
`;

export const CurrentTempWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Temperature = styled.p`
  font-weight: 700;
  font-size: var(--ah-temperature-value);
  line-height: 52px;
`;

export const DegreeSign = styled.span`
  font-weight: 300;
  font-size: var(--ah-subtitle-small);
  line-height: 15px;
`;

export const MaxMinTempWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: var(--ah-subtitle-small);
  line-height: 8px;
  gap: 8px;
`;
