import { styled } from 'styled-components';

export const ExtraCard = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  background: rgba(255, 255, 255, 0.36);
  border-radius: 10px;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 0.5rem;
`;
export const Left = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CityName = styled.h3`
  font-size: 1.25rem;
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export const Temperature = styled.span`
  font-weight: 700;
  font-size: 43px;
  line-height: 52px;
`;

export const DegreeSign = styled.span`
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
`;
