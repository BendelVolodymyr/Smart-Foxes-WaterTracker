import styled from 'styled-components';
import { Field } from 'formik';

export const Title = styled.div`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1em;
`;

export const FormStyled = styled.form`
  width: 100%;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
`;

export const Label = styled.label`
  display: block;
  margin-top: 15px;
  margin-bottom: 5px;
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1em;
  &.small {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25em;
  }
`;
export const InputContainer = styled.div`
  position: relative;
`;
export const Input = styled(Field)`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25em;
  display: flex;
  padding: 12px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 6px;
  border: 1px solid #afafaf;
  width: 100%;
  &.error {
    color: #e74c3c;
    border: 1px solid #e74c3c;
  }
  &::-webkit-autofill {
    color: #afafaf;
  }
  &::-webkit-input-placeholder {
    color: #afafaf;
  }
  &::-moz-placeholder {
    color: #afafaf;
  }
  &:-moz-placeholder {
    color: #afafaf;
  }
  &:-ms-input-placeholder {
    color: #afafaf;
  }
`;

export const RadioLabel = styled.label`
  margin-right: 15px;
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25em;
`;

export const RadioGroup = styled.div`
  margin-bottom: auto;
`;

export const Radio = styled(Field)`
  display: inline;
  margin-top: 15px;
  margin-bottom: 53px;
  margin-right: 5px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media screen and (min-width: 768px) {
    max-width: 850px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  margin-top: 24px;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  padding: 10px 50px;
  display: block;
  margin-left: auto;
  color: #fff;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
`;

export const ButtonIcon = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background: transparent;
`;

export const ShowPassIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const HidePassIcon = styled.img`
  width: 16px;
  height: 16px;
`;
export const ErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;
