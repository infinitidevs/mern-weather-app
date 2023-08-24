import { styled } from 'styled-components';

export const WeatherExtraWrapper = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  padding: var(--ah-section-padding);
  gap: var(--ah-gap-extra-card);
`;
