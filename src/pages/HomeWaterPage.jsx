import MonthStateTable from '../components/HomeWaterPageComponents/MonthStateTable/MonthStateTable';
import { useEffect, useState } from 'react';
import {
  HomePageContainer,
  LeftBoxWrapper,
  RightBoxWrapper,
} from './HomeWaterPage.styled';

import TodayWaterList from '../components/HomeWaterPageComponents/TodayWaterList/TodayWaterList';

import DailyNorma from '../components/HomePageComponents/DailyNorma/DailyNorma';
import DailyNormaModal from '../components/HomePageComponents/DailyNormaModal/DailyNormaModal';


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
      <LeftBoxWrapper>
        <DailyNormaModal />
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
