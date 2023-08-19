import { styled } from 'styled-components';

export const ListWrapper = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: var(--ah-radius-card-secondary);
  padding: var(--ah-heading-icon-padding);
  box-shadow: var(--ah-box-shadow-card);
  backdrop-filter: var(--ah-backdrop-filter-card);
`;

export const IconList = styled.img`
  height: 35px;
  width: 35px;
`;
