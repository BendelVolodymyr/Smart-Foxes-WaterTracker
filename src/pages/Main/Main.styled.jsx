import styled from 'styled-components';

import backgroundMainPageMob from '../../assets/backgroundWelcomePg/backgroundMainPageMob.webp';
import backgroundMainPageMob2x from '../../assets/backgroundWelcomePg/backgroundMainPageMob2x@2.webp';
import backgroundMainPageTab from '../../assets/backgroundWelcomePg/backgroundMainPageTab.webp';
import backgroundMainPageTab2x from '../../assets/backgroundWelcomePg/backgroundMainPageTab2x@2.webp';
import backgroundMainPageDesk from '../../assets/backgroundWelcomePg/backgroundMainPageDesk.webp';
import backgroundMainPageDesk2x from '../../assets/backgroundWelcomePg/backgroundMainPageDesk2x@2x.webp';
import backgroundElementMainPageDesk from '../../assets/backgroundWelcomePg/backgroundElementMainPageDesk.webp';
import backgroundElementMainPageDesk2x from '../../assets/backgroundWelcomePg/backgroundElementMainPageDesk2x@2.webp';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: image-set(url(${backgroundMainPageMob}) 1x, url(${backgroundMainPageMob2x}) 2x);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 24px 20px 40px;
  background-color: ${(p) => p.theme.colors.primary.bg};
  @media only screen and (min-width: ${(p) => p.theme.screens.tab}) {
    padding: 40px 32px 50px;
    background-image: image-set(
      url(${backgroundMainPageTab}) 1x,
      url(${backgroundMainPageTab2x}) 2x
    );
  }
  @media screen and (min-width: ${(p) => p.theme.screens.desk}) {
    padding: 80px 0 294px;
    background-image: image-set(
        url(${backgroundMainPageDesk}) 1x,
        url(${backgroundMainPageDesk2x}) 2x
      ),
      image-set(
        url(${backgroundElementMainPageDesk}) 1x,
        url(${backgroundElementMainPageDesk2x}) 2x
      );
    background-size: contain;
    background-position:
      right bottom,
      left 49px;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 280px;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: ${(p) => p.theme.screens.tab}) {
    width: 704px;
    align-items: flex-start;
    gap: 60px;
  }
  @media screen and (min-width: ${(p) => p.theme.screens.desk}) {
    width: 1014px;
    flex-direction: row;
    align-items: flex-end;
    gap: 81px;
  }
`;
