import styled from 'styled-components';

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

  background-color: ${(p) => p.theme.colors.primary.bg};

  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px #407bff33;
`;

export const Button = styled.button`
  font-family: Roboto;
  font-size: 16px;
  font-weight: ${(p) => p.theme.fontWeights.regular};
  line-height: 20px;
  text-align: left;

  display: flex;

  gap: 8px;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  color: ${(p) => p.theme.colors.primary.accent};
  /* z-index: 999; */
`;

// export const Button = styled.button``;
