import MonthStateTable from '../components/HomeWaterPageComponents/MonthStateTable/MonthStateTable';
import { useEffect, useState } from 'react';
import {
  DailyNormaBoxWrapper,
  HomePageContainer,
  TodayAndCalendarWrapper,
} from './HomeWaterPage.styled';

import TodayWaterList from '../components/HomeWaterPageComponents/TodayWaterList/TodayWaterList';

import DailyNorma from '../components/HomePageComponents/DailyNorma/DailyNorma';

const HomeWaterPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleAddWaterClick = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    if (modalOpen) {
      // Відкрити модальне вікно тут
      console.log('Modal opened');
    }
  }, [modalOpen]);

  return (
    <HomePageContainer>
      <DailyNormaBoxWrapper>
        <DailyNorma ModalEditWaterNorma={handleAddWaterClick}></DailyNorma>
      </DailyNormaBoxWrapper>
      <TodayAndCalendarWrapper>
        <TodayWaterList
          handleAddWaterClick={handleAddWaterClick}
        ></TodayWaterList>
        <MonthStateTable></MonthStateTable>
      </TodayAndCalendarWrapper>
      {/* {modalOpen && <TodayListModal />} розкоментую коли буде модалка */}
    </HomePageContainer>
  );
};

export default HomeWaterPage;
