import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/theme';
import bgMob from './image/backgroundMobile.png';
import bgDes from './image/backgroundDesk.png';
import bgmobTab from './image/backgroundTab.png';

export const LoginContainer = styled.div`
  @media (min-width: 320px) and (max-width: 768px) {
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-image: url(${bgMob});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 1px 40px;
  }
  @media (min-width: 520px) and (max-width: 1200px) {
    background-image: url(${bgmobTab});
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    padding: 32px 40px;
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    background-image: url(${bgDes});
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media (min-width: 1440px) {
    padding: 49px 18px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    background-image: url(${bgDes});
    background-repeat: no-repeat;
    background-size: cover;
  }
  background-color: #${theme.lightTheme.colors.primary.bg};
  gap: 16px;
`;

export const AuthTitle = styled.h2`
  color: #${theme.lightTheme.colors.primary.text};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  @media (min-width: 390px) and (max-width: 768px) {
    width: 350px;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    width: 336px;
    overflow: hidden;
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    width: 384px;
  }

  @media (min-width: 1440px) {
    padding-right: 198px;
  }
`;

export const Label = styled.label`
  color: #${theme.lightTheme.colors.primary.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  margin-top: 8px;
  width: 100%;
  height: 44px;
  border-radius: 6px;
  border: 1px solid #${theme.lightTheme.colors.secondary.color5};
  color: #${theme.lightTheme.colors.primary.accent};
  background: #${theme.lightTheme.colors.primary.bg};
  padding: 12px 10px;
  outline: none;

  &::placeholder {
    color: #${theme.lightTheme.colors.secondary.color3};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
  :focus {
    color: #${theme.lightTheme.colors.primary.accent};
  }
`;

export const ButtonPassword = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  left: 90%;
  bottom: 15%;
`;

export const Button = styled.button`
  display: block;
  border-radius: 10px;
  padding: 8px 30px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  background: #${theme.lightTheme.colors.primary.accent};
  color: #${theme.lightTheme.colors.primary.bg};
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
  @media (min-width: 768px) {
    padding: 10px 30px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const LinkTo = styled(NavLink)`
  color: #${theme.lightTheme.colors.primary.accent};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  transition: transform 150ms ease-in-out;
  &:hover {
    color: #${theme.lightTheme.colors.secondary.color4};
  }
`;

export const ImgWrapp = styled.div`
  padding-top: 50px;
  margin: 0 auto;
  @media (min-width: 620px) and (max-width: 700px) {
    position: relative;
    bottom: 95px;
    left: 0;
  }
  @media (min-width: 700px) and (max-width: 768px) {
    position: relative;
    bottom: 120px;
    left: 0;
  }

  @media (min-width: 768px) and (max-width: 1440px) {
    position: relative;
    bottom: 311px;
    padding-left: 135px;
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    position: relative;
    bottom: 311px;
    padding-left: 135px;
  }
  @media (min-width: 1440px) {
    position: relative;
    bottom: 0;
    padding-left: 0;
    margin: 0;
  }
`;

export const ImgBottle = styled.img``;
