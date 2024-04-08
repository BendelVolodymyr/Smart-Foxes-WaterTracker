import styled from 'styled-components';


import backgroundElementMainPageDesk from "../assets/backgroundWelcomePg/backgroundElementMainPageDesk.png";
import backgroundElementMainPageDesk2x from "../assets/backgroundWelcomePg/backgroundElementMainPageDesk2x@2.png"
import bottleHomeDesk from "../assets/backgroundHomePg/botleHomeDesk.png";
import bottleHomeDesk2x from "../assets/backgroundHomePg/botlteHomeDesk2x.png"
import backgroundHomeTab from "../assets/backgroundHomePg/backgroundHomeTab.png";
import backgroundHomeTab2x from "../assets/backgroundHomePg/BackgroundHomeTab2x.png";
import bottleHomeTab from "../assets/backgroundHomePg/bottleHomeTab.png";
import bottleHomeTab2x from "../assets/backgroundHomePg/bottleHomeTab2x.png";

import backgroundHomeMob from "../assets/backgroundHomePg/backgroundHomeMob.png";
import backgroundHomeMob2x from "../assets/backgroundHomePg/backgroundHomeMob2x.png";
import bottleHomeMob from "../assets/backgroundHomePg/bottleHomeMob.png";
import bottleHomeMob2x from "../assets/backgroundHomePg/bottleHomeMob2x.png";



const HomePageContainer = styled.main`
display: flex;
flex-direction:column;

align-items: center;

color:${p => p.theme.colors.primary.text};
background-color: ${(p) => p.theme.colors.primary.bg};
background-image: image-set(
        url(${bottleHomeMob}) 1x,
        url(${bottleHomeMob2x}) 2x
      ),
      image-set(
        url(${backgroundHomeMob}) 1x,
        url(${backgroundHomeMob2x}) 2x
      );
background-position: center 106px, center;
background-size: auto, 100vw auto;
background-repeat: no-repeat;


@media (min-width: ${({ theme }) => theme.screens.tab}){
  background-image: image-set(
        url(${bottleHomeTab}) 1x,
        url(${bottleHomeTab2x}) 2x
      ),
      image-set(
        url(${backgroundHomeTab}) 1x,
        url(${backgroundHomeTab2x}) 2x
      );
background-position: center 40px, center;

}


@media (min-width: ${({ theme }) => theme.screens.desk}) {
    flex-direction:row;
    align-items: flex-start;
    padding: 0px 112px;
  
    background-image: image-set(
        url(${bottleHomeDesk}) 1x,
        url(${bottleHomeDesk2x}) 2x
      ),
      image-set(
        url(${backgroundElementMainPageDesk}) 1x,
        url(${backgroundElementMainPageDesk2x}) 2x
      );
background-position: left top, center;
  }
`;

//змінити, коли буде контекст
const DailyNormaBoxWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 240px;

width: 280px;
height: 507px;


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
background: ${p => p.theme.colors.secondary.color1};
box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.30);

width: 280px;
height:auto;
padding: 24px 8px;
margin: 0;
margin-bottom:4px;


@media (min-width: ${({ theme }) => theme.screens.tab}) {
  width: 704px;
  padding: 32px 24px;
}

@media (min-width: ${({ theme }) => theme.screens.desk}) {
  min-width: 592px;
  
}


`;


export {
  TodayAndCalendarWrapper,
  DailyNormaBoxWrapper,
  HomePageContainer
}