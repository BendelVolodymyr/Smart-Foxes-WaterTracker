import styled from 'styled-components';
import theme from '../../../styles/theme';

const DailyWaterWrapper = styled.div`
  padding: 8px 20px 8px 20px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 164px;
  border-radius: 10px;
  border-color: #${theme.lightTheme.colors.secondary.color1};
`;
const DailyWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  justify-content: left;
`;
const DailyNormaP = styled.p`
  font-size: 18px;
  font-weight: ${theme.lightTheme.fontWeights.medium};
  line-height: 24px;
  color: #${theme.lightTheme.colors.primary.text};
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
  color: #${theme.lightTheme.colors.primary.accent};
`;

export {
  DailyWaterWrapper,
  DailyNormaP,
  ButtonEditNorma,
  DailyWrapper,
  NumberDailyNorma,
};
