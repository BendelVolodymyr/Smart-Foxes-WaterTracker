import styled from 'styled-components';




export const FormStyled = styled.form`
  width: 100%;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
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



export const ShowPassIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const HidePassIcon = styled.img`
  width: 16px;
  height: 16px;
`;
