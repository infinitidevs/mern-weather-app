import { styled } from 'styled-components';

export const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    193deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(27, 77, 228, 1) 55%,
    rgba(0, 212, 255, 1) 100%
  );
  color: var(--ah-color-primary-light);
  box-shadow: var(--ah-box-shadow-card);
  border-radius: var(--ah-radius-card);
  border: var(--ah-border-card);
  backdrop-filter: var(--ah-backdrop-filter-card);
  padding: var(--ah-layout-padding);
  width: 100vw;
  gap: var(--ah-gap-extra-card);

  @media screen and (min-width: 500px) {
    width: 400px;
  }
`;
