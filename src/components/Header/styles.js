import { styled } from 'styled-components';

export const Container = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0rem 0 1rem;
  gap: 0.7rem;
`;

export const LogoImg = styled.img`
  width: 35px;
  height: auto;
`;

export const Favorites = styled.section`
  padding: var(--ah-card-header-padding);
`;
