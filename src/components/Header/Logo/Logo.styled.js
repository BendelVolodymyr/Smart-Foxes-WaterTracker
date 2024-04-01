import styled from 'styled-components';
import theme from '../../../styles/theme';

export const LogoWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
// export const LogoText = styled.p`
//   font-family: Roboto;
//   font-size: 12px;
//   font-weight: 700;
//   line-height: 14.06px;
//   text-align: left;

//   /* w  idth: 58px; */
//   font-weight: ${theme.fontWeights.bolt};
//   color: #${theme.colors.lightTheme.primary.accent};
// `;

export const LogoText = styled.p`
  width: 58px;
  color: blue;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
