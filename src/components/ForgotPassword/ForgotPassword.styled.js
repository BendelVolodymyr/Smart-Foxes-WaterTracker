import styled from 'styled-components';

import mobileBotl from '../../assets/imageSingPg/webp/mobile_bottle.webp';
import mobileBotl2x from '../../assets/imageSingPg/webp/mobile_bottle@2x.webp';

import botleTab from '../../assets/imageSingPg/webp/bgFortab.webp';
import bottleTab2 from '../../assets/imageSingPg/webp/bgFortab@2x.webp';

import bottleDesk from '../../assets/imageSingPg/webp/desk_bottle.webp';
import bottleDesk2x from '../../assets/imageSingPg/webp/desk_bottle@2x.webp';

export const ForgotContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: image-set(url(${mobileBotl}) 1x, url(${mobileBotl2x}) 2x);
  background-position: center bottom 3px;
  background-repeat: no-repeat;
  background-size: auto;
  @media (min-width: ${(p) => p.theme.screens.tab}) {
    justify-content: space-between;
    background-image: image-set(url(${botleTab}) 1x, url(${bottleTab2}) 2x);
    background-position: bottom 4px right 95px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media (min-width: ${(p) => p.theme.screens.desk}) {
    background-image: image-set(url(${bottleDesk}) 1x, url(${bottleDesk2x}) 2x);
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    flex-direction: row-reverse;
  }
`;

export const RefreshContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: image-set(url(${mobileBotl}) 1x, url(${mobileBotl2x}) 2x);
  background-position: center bottom 3px;
  background-repeat: no-repeat;
  background-size: auto;
  @media (min-width: ${(p) => p.theme.screens.tab}) {
    justify-content: space-between;
    background-image: image-set(url(${botleTab}) 1x, url(${bottleTab2}) 2x);
    background-position: bottom right 30px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media (min-width: ${(p) => p.theme.screens.desk}) {
    background-image: image-set(url(${bottleDesk}) 1x, url(${bottleDesk2x}) 2x);
    background-position: left;
    background-size: contain;
    background-repeat: no-repeat;
    flex-direction: row-reverse;
  }
`;
