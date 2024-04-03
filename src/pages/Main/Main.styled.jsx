import styled from '@emotion/styled';

import backgroundMainPageMob from '../../assets/backgroundWelcomePg/backgroundMainPageMob.png';
import backgroundMainPageMob2x from '../../assets/backgroundWelcomePg/backgroundMainPageMob2x@2.png';
import backgroundMainPageTab from '../../assets/backgroundWelcomePg/backgroundMainPageTab.png';
import backgroundMainPageTab2x from '../../assets/backgroundWelcomePg/backgroundMainPageTab2x@2.png';
import backgroundMainPageDesk from '../../assets/backgroundWelcomePg/backgroundMainPageDesk.png';
import backgroundMainPageDesk2x from '../../assets/backgroundWelcomePg/backgroundMainPageDesk2x@2x.png';
import backgroundElementMainPageDesk from '../../assets/backgroundWelcomePg/backgroundElementMainPageDesk.png';
import backgroundElementMainPageDesk2x from '../../assets/backgroundWelcomePg/backgroundElementMainPageDesk2x@2.png';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px 20px 40px;
  background-image: image-set(
    url(${backgroundMainPageMob}) 1x,
    url(${backgroundMainPageMob2x}) 2x
  );
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media only screen and (min-width: 768px) {
    background-image: image-set(
      url(${backgroundMainPageTab}) 1x,
      url(${backgroundMainPageTab2x}) 2x
    );
    gap: 60px;
    padding: 40px 32px 50px;
  }
  @media screen and (min-width: 1440px) {
    background-image: image-set(
        url(${backgroundMainPageDesk}) 1x,
        url(${backgroundMainPageDesk2x}) 2x
      ),
      image-set(
        url(${backgroundElementMainPageDesk}) 1x,
        url(${backgroundElementMainPageDesk2x}) 2x
      );
    flex-direction: row;
    align-items: flex-end;
    gap: 81px;
    background-size: contain;
    background-position:
      right bottom,
      left 49px;
    padding: 80px 0 294px;
    justify-content: center;
  }
`;
