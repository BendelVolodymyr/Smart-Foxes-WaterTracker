import styled from 'styled-components';

import botleTab from './LoginPage/image/bgFortab.png';
import bottleTab2 from './LoginPage/image/bgForTab@2x.png';

import mobileBotl from './LoginPage/image/mobile_bottle.png';
import mobileBotl2x from './LoginPage/image/mobile_bottle@2x.png';

import bottleDesk from './LoginPage/image/desk_bottle.png';
import bottleDesk2x from './LoginPage/image/desk_bottle@2x.png';

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
    background-position: bottom -2px right -61px;
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
    padding-bottom: 180px;
  }

  @media (min-width: ${(p) => p.theme.screens.desk}) {
    width: 384px;
    margin-right: 198px;
    padding-bottom: 135px;
    padding-top: 122px;
  }
`;
