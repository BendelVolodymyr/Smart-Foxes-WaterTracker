import styled from 'styled-components';
import TodayWaterList from '../components/HomePageComponents/TodayWaterList';
import MonthStateTable from '../components/HomePageComponents/MonthStateTable';

const HomeWaterPage = () => {
  const HomePageContainer = styled.div`
    display: flex;
  `;
  const LeftBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 592px;
    height: 680px;
    padding: 32px 24px;
  `;

  const RightBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 592px;
    height: 680px;
    padding: 32px 24px;
  `;

  return (
    <HomePageContainer>
      <LeftBoxWrapper></LeftBoxWrapper>
      <RightBoxWrapper>
        <TodayWaterList></TodayWaterList>
        <MonthStateTable></MonthStateTable>
      </RightBoxWrapper>
    </HomePageContainer>
  );
};

export default HomeWaterPage;
