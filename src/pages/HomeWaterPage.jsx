import MonthStateTable from '../components/HomeWaterPageComponents/MonthStateTable/MonthStateTable';
import { useEffect, useState } from 'react';
import {
  HomePageContainer,
  LeftBoxWrapper,
  RightBoxWrapper,
} from './HomeWaterPage.styled';
import TodayWaterList from '../components/HomeWaterPageComponents/TodayWaterList/TodayWaterList';

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
