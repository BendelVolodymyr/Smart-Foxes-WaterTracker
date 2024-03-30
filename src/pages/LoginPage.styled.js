import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LoginContainer = styled.div`
  padding: 24px 20px;
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background-color: #ffff;
  gap: 16px;
`;

export const AuthTitle = styled.h2`
  color: #2f2f2f;
  font-size: 26px;

  font-weight: 500;
  line-height: 1.23;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

export const Label = styled.label`
  color: #2f2f2f;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;

export const Input = styled.input`
  margin-top: 8px;
  width: 100%;
  height: 44px;
  border-radius: 6px;
  border: 1px solid #d7e3ff;
  color: #407bff;
  background: #fff;
  padding: 12px 10px;
  outline: none;
  &::placeholder {
    color: #9ebbff;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
  :focus {
    color: #407bff;
  }
`;

export const Button = styled.button`
  display: block;
  border-radius: 10px;
  padding: 8px 30px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  background: #407bff;
  color: #ffff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  width: 100%;
  cursor: pointer;
  transition: transform 150ms ease-in-out;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
`;

export const LinkTo = styled(NavLink)`
  color: #407bff;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  transition: transform 150ms ease-in-out;
  &:hover {
    color: #ff9d43;
  }
`;
