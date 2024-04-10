import styled from 'styled-components';

import mobileBotl from '../../assets/imageSingPg/mobile_bottle.png';
import mobileBotl2x from '../../assets/imageSingPg/mobile_bottle@2x.png';

import botleTab from '../../assets/imageSingPg/bgFortab.png';
import bottleTab2 from '../../assets/imageSingPg/bgForTab@2x.png';

import bottleDesk from '../../assets/imageSingPg/desk_bottle.png';
import bottleDesk2x from '../../assets/imageSingPg/desk_bottle@2x.png';

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
