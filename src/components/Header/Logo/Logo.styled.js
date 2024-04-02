import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const LogoText = styled.p`
  width: 58px;

  color: ${(p) => p.theme.colors.primary.accent};

  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bolt};
  line-height: normal;
  text-transform: uppercase;
`;
