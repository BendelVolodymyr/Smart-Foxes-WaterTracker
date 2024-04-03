import styled from 'styled-components';

const HomePageContainer = styled.div`
display: flex;
flex-direction:column;

align-items: center;
color:${p => p.theme.colors.primary.text};

background-image: url('/src/assets/backgroundHomePg/Bottle_Home_Mob.png'), url('/src/assets/backgroundHomePg/Background_Home_Mob.png');
background-position: center 106px, center;
background-size: auto, 100vw auto;
background-repeat: no-repeat;


@media (min-width: ${({ theme }) => theme.screens.tab}){
  background-image: url('/src/assets/backgroundHomePg/Bottle_Home_Tab.png'), url('/src/assets/backgroundHomePg/Background_Home_Tab.png');
background-position: center 40px, center;

}


@media (min-width: ${({ theme }) => theme.screens.desk}) {
    flex-direction:row;
    align-items: flex-start;

    background-image: url('/src/assets/backgroundHomePg/Botle_Home_desk.png'),  url('/src/assets/backgroundWelcomePg/backgroundElementMainPageDesk.png');
background-position: left top, center;
  }
`;

//змінити, коли буде контекст
const DailyNormaBoxWrapper = styled.div`
display: flex;
flex-direction: column;

width: 280px;
height: 507px;


@media (min-width: ${({ theme }) => theme.screens.tab}) {
  width: 704px;
}

`;

const TodayAndCalendarWrapper = styled.div`
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


@media (min-width: ${({ theme }) => theme.screens.tab}) {
  width: 704px;
  padding: 32px 24px;
}

@media (min-width: ${({ theme }) => theme.screens.desk}) {
  width: 592px;
  
}


`;


export {
  TodayAndCalendarWrapper,
  DailyNormaBoxWrapper,
  HomePageContainer
}