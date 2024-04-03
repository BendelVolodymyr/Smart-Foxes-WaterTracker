import styled from 'styled-components';

const DailyWaterWrapper = styled.div`
  padding: 8px 20px 8px 20px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 164px;
  margin-top: 30px;
  margin-left: 73px;
  border-radius: 10px;
  border-color: ${(p) => p.theme.colors.secondary.color1};
`;
const DailyWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  justify-content: left;
`;
const DailyNormaP = styled.p`
  font-size: 18px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 24px;
  color: ${(p) => p.theme.colors.primary.text};
  white-space: nowrap;
`;

const ButtonEditNorma = styled.button`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #8baeff;
`;

const NumberDailyNorma = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${(p) => p.theme.colors.primary.accent};
`;

export {
  DailyWaterWrapper,
  DailyNormaP,
  ButtonEditNorma,
  DailyWrapper,
  NumberDailyNorma,
};
