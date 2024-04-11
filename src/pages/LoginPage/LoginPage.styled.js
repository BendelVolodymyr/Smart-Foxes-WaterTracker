import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import bgMob from '../../assets/imageSingPg/webp/backgroundMobile.webp';
import bgMob2x from '../../assets/imageSingPg/webp/backgroundMobile@2x.webp';

import bgTab from '../../assets/imageSingPg/webp/backgroundHomeTab.webp';
import bgTab2x from '../../assets/imageSingPg/webp/backgroundHomeTab@2x.webp';

import bgDesk from '../../assets/imageSingPg/webp/deskBg.webp';
import bgDesk2x from '../../assets/imageSingPg/webp/deskBg@2x.webp';

import mobileBotl from '../../assets/imageSingPg/webp/mobile_bottle.webp';
import mobileBotl2x from '../../assets/imageSingPg/webp/mobile_bottle@2x.webp';

import botleTab from '../../assets/imageSingPg/webp/bgFortab.webp';
import bottleTab2 from '../../assets/imageSingPg/webp/bgFortab@2x.webp';

import bottleDesk from '../../assets/imageSingPg/webp/desk_bottle.webp';
import bottleDesk2x from '../../assets/imageSingPg/webp/desk_bottle@2x.webp';
import theme from '../../styles/theme';

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(p) => p.theme.colors.primary.bg};
  background-image: image-set(url(${bgMob}) 1x, url(${bgMob2x}) 2x);
  background-position: top;
  background-size: 100vw auto;
  background-repeat: no-repeat;
  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    background-image: image-set(url(${bgTab}) 1x, url(${bgTab2x}) 2x);
    background-position: center 32px;
  }
  @media (min-width: ${({ theme }) => theme.screens.desk}) {
    background-image: image-set(url(${bgDesk}) 1x, url(${bgDesk2x}) 2x);
    background-position: center 10px;
    align-items: center;
  }
`;

export const Container = styled.div`
  width: 280px;
  padding: 24px 0;

  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    width: 768px;
    padding: 40px 0 0 32px;
  }
  @media (min-width: ${(p) => p.theme.screens.desk}) {
    width: 1440px;
    padding: 40px 18px;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: image-set(url(${mobileBotl}) 1x, url(${mobileBotl2x}) 2x);
  background-position: center bottom 3px;
  background-repeat: no-repeat;
  background-size: auto;
  @media (min-width: ${(p) => p.theme.screens.tab}) {
    justify-content: space-between;
    background-image: image-set(url(${botleTab}) 1x, url(${bottleTab2}) 2x);
    background-position: bottom 15px right -12px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media (min-width: ${(p) => p.theme.screens.desk}) {
    background-image: image-set(url(${bottleDesk}) 1x, url(${bottleDesk2x}) 2x);
    background-position: left;
    background-size: auto;
    background-repeat: no-repeat;
    flex-direction: row-reverse;
  }
`;

export const AuthTitle = styled.h2`
  color: ${(p) => p.theme.colors.primary.text};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  padding-bottom: 276px;

  @media (min-width: ${(p) => p.theme.screens.tab}) {
    width: 336px;
    padding-bottom: 150px;
  }

  @media (min-width: ${(p) => p.theme.screens.desk}) {
    width: 384px;
    margin-right: 198px;
    padding-bottom: 135px;
    padding-top: 122px;
  }
`;

export const Label = styled.label`
  color: ${(p) => p.theme.colors.primary.text};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  width: 100%;
`;

export const IconConteiner = styled.div`
  position: relative;
`;

export const Input = styled.input`
  margin-top: 8px;
  width: 100%;
  height: 44px;
  border-radius: 6px;
  border: ${({ error }) =>
    error
      ? `1px solid ${theme.lightTheme.colors.secondary.color2}`
      : `1px solid ${theme.lightTheme.colors.secondary.color5}`};
  color: ${({ error }) =>
    error
      ? ` ${theme.lightTheme.colors.secondary.color2}`
      : `${theme.lightTheme.colors.primary.accent}`};

  background: ${(p) => p.theme.colors.primary.bg};
  padding: 12px 10px;
  outline: none;
  margin-bottom: 4px;
  &::placeholder {
    color: ${(p) => p.theme.colors.secondary.color3};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }
  :focus {
    color: ${(p) => p.theme.colors.primary.accent};
  }
`;

export const ButtonPassword = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  left: 92%;
  bottom: 20%;
`;

export const Button = styled.button`
  display: block;
  border-radius: 10px;
  padding: 8px 30px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  background: ${(p) => p.theme.colors.primary.accent};
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
  @media (min-width: ${(p) => p.theme.screens.tab}) {
    padding: 10px 30px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const LinkTo = styled(NavLink)`
  color: ${(p) => p.theme.colors.primary.accent};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  transition: transform 150ms ease-in-out;
  &:hover {
    color: ${(p) => p.theme.colors.secondary.color4};
  }
`;

export const ErrorMessage = styled.p`
  color: ${(p) => p.theme.colors.secondary.color2};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

export const ButtonGoogle = styled.button`
  /* display: block; */
  padding: 8px 30px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  background: ${(p) => p.theme.colors.primary.accent};
  color: #ffff;
  font-size: 16px;
  line-height: 1.25;
  font-weight: 500;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  @media (min-width: ${(p) => p.theme.screens.tab}) {
    padding: 10px 30px;
    font-size: 18px;
    line-height: 1.33;
  }
`;
