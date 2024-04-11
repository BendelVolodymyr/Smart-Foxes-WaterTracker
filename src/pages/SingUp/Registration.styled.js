import styled from 'styled-components';
import theme from '../../styles/theme';

import botleTab from '../../assets/imageSingPg/webp/bgFortab.webp';
import bottleTab2 from '../../assets/imageSingPg/webp/bgFortab@2x.webp';

import mobileBotl from '../../assets/imageSingPg/webp/mobile_bottle.webp';
import mobileBotl2x from '../../assets/imageSingPg/webp/mobile_bottle@2x.webp';

import bottleDesk from '../../assets/imageSingPg/webp/desk_bottle.webp';
import bottleDesk2x from '../../assets/imageSingPg/webp/desk_bottle@2x.webp';

export const SingUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: image-set(url(${mobileBotl}) 1x, url(${mobileBotl2x}) 2x);
  background-position: center bottom 3px;
  background-repeat: no-repeat;
  background-size: auto;
  @media (min-width: ${(p) => p.theme.screens.tab}) {
    justify-content: space-between;
    background-image: image-set(url(${botleTab}) 1x, url(${bottleTab2}) 2x);
    background-position: bottom right -49px;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  padding-bottom: 276px;

  @media (min-width: ${(p) => p.theme.screens.tab}) {
    width: 336px;
    padding-bottom: 110px;
  }

  @media (min-width: ${(p) => p.theme.screens.desk}) {
    width: 384px;
    margin-right: 198px;
    padding-bottom: 135px;
    padding-top: 122px;
  }
`;
export const InputPassword = styled.input`
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
  padding: 12px 36px 12px 10px;
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
