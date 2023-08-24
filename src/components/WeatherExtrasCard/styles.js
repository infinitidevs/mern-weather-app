import { styled } from 'styled-components';

export const CardWeatherExtraCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: var(--ah-extra-card-padding);
  background: var(--ah-color-glass-effect);
  border-radius: var(--ah-radius-card-secondary);
  font-weight: 400;
  font-size: var(--ah-subtitle-small);
`;

export const IconWrapper = styled.article`
  background: var(--ah-color-primary-light);
  box-shadow: var(--ah-icon-shadow-card);
  border-radius: var(--ah-radius-button);
  padding: 0.3rem;
`;

export const Icon = styled.svg`
  width: var(--ah-size-svg);
  color: var(--ah-color-logos);
  fill: var(--ah-color-logos);
`;
