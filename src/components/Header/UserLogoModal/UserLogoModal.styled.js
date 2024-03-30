import styled from 'styled-components';
import theme from '../../../styles/theme';
console.log(theme);

export const Modal = styled.div`
  position: absolute;
  top: 110%;
  right: 0;

  width: 118px;
  height: 88px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;

  background: #${theme.colors.lightTheme.primary.bg};
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px #407bff33;

  :hover {
    color: ${({ theme }) => `#${theme.colors.lightTheme.secondary.color4}`};
    transition: color ${theme.transitions.hover150ms};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: 20px;
  text-align: left;

  color: ${({ theme }) => `#${theme.colors.lightTheme.primary.accent}`};
`;

// export const Button = styled.button``;
