import { styled } from 'styled-components';

export const AppWrapper = styled.main`
  max-width: 100vw;
  transition: all 1s ease-in-out;

  @media screen and (min-width: 500px) {
    max-width: 400px;
  }
`;
