import { styled } from 'styled-components';

export const SunriseCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: var(--ah-extra-card-padding);
  background: var(--ah-color-glass-effect);
  border: var(--ah-border-extra-card);
  border-radius: var(--ah-radius-card-secondary);
  font-weight: 400;
  font-size: var(--ah-subtitle-small);
  padding-left: 12px;
`;

export const ImgWrapper = styled.article`
  background: var(--ah-color-primary-light);
  box-shadow: var(--ah-icon-shadow-card);
  border-radius: var(--ah-radius-button);
  padding: 0.3rem;

  > img {
    width: 24px;
  }
`;
