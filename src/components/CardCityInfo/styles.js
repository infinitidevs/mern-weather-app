import { styled } from 'styled-components';

export const CardCityInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--ah-section-padding);
  gap: var(--ah-gap-city-info);
`;

export const CardCityInfoDate = styled.p`
  font-size: var(--ah-subtitle);
  line-height: 11px;
`;
