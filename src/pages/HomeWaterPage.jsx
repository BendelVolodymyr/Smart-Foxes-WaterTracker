import TodayWaterList from '../components/HomeWaterPageComponents/TodayWaterList/TodayWaterList';
import MonthStateTable from '../components/HomeWaterPageComponents/MonthStateTable/MonthStateTable';
import { useState } from 'react';
import {
  HomePageContainer,
  LeftBoxWrapper,
  RightBoxWrapper,
} from './HomeWaterPage.styled';

const HomeWaterPage = () => {
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
