import styled from 'styled-components';
import theme from '../../../styles/theme';

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

  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px #407bff33;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  &:focus {
    outline: none;
    box-shadow: none;
  }

  color: navajowhite;
`;

// export const Button = styled.button``;
