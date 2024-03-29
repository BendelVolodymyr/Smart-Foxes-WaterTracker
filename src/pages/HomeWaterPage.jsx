import styled from 'styled-components';
import TodayWaterList from '../components/HomePageComponents/TodayWaterList';
import MonthStateTable from '../components/HomePageComponents/MonthStateTable/MonthStateTable';
import { useState } from 'react';

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

  const [modalOpen, setModalOpen] = useState(false);
  const handleAddWaterClick = () => {
    setModalOpen(true); // Відкрити модальне вікно при кліку на кнопку
    console.log(modalOpen);
  };
  return (
    <HomePageContainer>
      <LeftBoxWrapper></LeftBoxWrapper>
      <RightBoxWrapper>
        <TodayWaterList
          handleAddWaterClick={handleAddWaterClick}
        ></TodayWaterList>
        <MonthStateTable></MonthStateTable>
      </RightBoxWrapper>
      {/* {modalOpen && <TodayListModal />} розкоментую коли буде модалка */}
    </HomePageContainer>
  );
};

export default HomeWaterPage;
