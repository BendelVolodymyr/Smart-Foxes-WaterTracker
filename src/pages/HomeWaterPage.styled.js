import styled from 'styled-components';

import backgroundElementMainPageDesk from "../assets/backgroundHomePg/BackgroundHomeDesk.webp";
import backgroundElementMainPageDesk2x from "../assets/backgroundHomePg/BackgroundHomeDesk2x.webp";
import bottleHomeDesk from "../assets/backgroundHomePg/BotleHomeDesk.webp";
import bottleHomeDesk2x from "../assets/backgroundHomePg/BotleHomeDesk2x.webp"
import backgroundHomeTab from "../assets/backgroundHomePg/BackgroundHomeTab.webp";
import backgroundHomeTab2x from "../assets/backgroundHomePg/BackgroundHomeTab2x.webp";
import bottleHomeTab from "../assets/backgroundHomePg/BottleHomeTab.webp";
import bottleHomeTab2x from "../assets/backgroundHomePg/BottleHomeTab2x.webp";

import backgroundHomeMob from "../assets/backgroundHomePg/backgroundHomeMob.webp";
import backgroundHomeMob2x from "../assets/backgroundHomePg/BackgroundHomeMob2x.webp";
import bottleHomeMob from "../assets/backgroundHomePg/BottleHomeMob.webp";
import bottleHomeMob2x from "../assets/backgroundHomePg/BottleHomeMob2x.webp";

const HomePageContainer = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;

  color: ${(p) => p.theme.colors.primary.text};
  background-color: ${(p) => p.theme.colors.primary.bg};
  background-image: image-set(url(${bottleHomeMob}) 1x, url(${bottleHomeMob2x}) 2x),
    image-set(url(${backgroundHomeMob}) 1x, url(${backgroundHomeMob2x}) 2x);
  background-position:
    center 106px,
    center;
  background-size:
    auto,
    100vw auto;
  background-repeat: no-repeat;

  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    background-image: image-set(url(${bottleHomeTab}) 1x, url(${bottleHomeTab2x}) 2x),
      image-set(url(${backgroundHomeTab}) 1x, url(${backgroundHomeTab2x}) 2x);
    background-position:
      center 40px,
      center;
  }


@media (min-width: ${({ theme }) => theme.screens.desk}) {
    flex-direction:row;
    gap: 32px;
    align-items: flex-start;
    padding: 0px 112px;

    background-image: image-set(url(${bottleHomeDesk}) 1x, url(${bottleHomeDesk2x}) 2x),
      image-set(
        url(${backgroundElementMainPageDesk}) 1x,
        url(${backgroundElementMainPageDesk2x}) 2x
      );
    background-position:
      left top,
      center;
  }
`;


const DailyNormaBoxWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
gap: 240px;

width: 280px;
height: 507px;

margin-bottom:40px;
@media (min-width: ${({ theme }) => theme.screens.tab}) {
  width: 704px;
  gap: 326px;
}

@media (min-width: ${({ theme }) => theme.screens.desk}) {

  gap: 466px;
}

`;

const TodayAndCalendarWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
  background: ${(p) => p.theme.colors.secondary.color1};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);

  width: 280px;
  height: auto;
  padding: 24px 8px;
  margin: 0;
  margin-bottom: 4px;

  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    width: 704px;
    padding: 32px 24px;
  }

  @media (min-width: ${({ theme }) => theme.screens.desk}) {
    min-width: 592px;
  }
`;

export { TodayAndCalendarWrapper, DailyNormaBoxWrapper, HomePageContainer };
