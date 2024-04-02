import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px 20px 40px;
  background-image: url('/src/assets/backgroundWelcomePg/backgroundMainPageMob.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media only screen and (min-width: 768px) {
    background-image: url('/src/assets/backgroundWelcomePg/backgroundMainPageTab.png');
    gap: 60px;
    padding: 40px 32px 50px;
  }
  @media screen and (min-width: 1440px) {
    background-image: url('/src/assets/backgroundWelcomePg/backgroundMainPageDesk.png'),
      url('/src/assets/backgroundWelcomePg/backgroundElementMainPageDesk.png');
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
