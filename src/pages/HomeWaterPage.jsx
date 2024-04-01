import TodayWaterList from '../components/HomePageComponents/TodayWaterList/TodayWaterList';
import MonthStateTable from '../components/HomePageComponents/MonthStateTable/MonthStateTable';
import { useState } from 'react';
import {
  HomePageContainer,
  LeftBoxWrapper,
  RightBoxWrapper,
} from './HomeWaterPage.styled';
import DailyNorma from '../components/HomePageComponents/DailyNorma/DailyNorma';

const HomeWaterPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleAddWaterClick = () => {
    setModalOpen(true); // Відкрити модальне вікно при кліку на кнопку
    console.log(modalOpen);
  };

  return (
    <HomePageContainer>
      <LeftBoxWrapper>
        <DailyNorma ModalEditWaterNorma={handleAddWaterClick}></DailyNorma>
      </LeftBoxWrapper>
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
