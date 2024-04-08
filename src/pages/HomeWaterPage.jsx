import MonthStateTable from '../components/HomeWaterPageComponents/MonthStateTable/MonthStateTable';

import {
  DailyNormaBoxWrapper,
  HomePageContainer,
  TodayAndCalendarWrapper,
} from './HomeWaterPage.styled';
import TodayWaterList from '../components/HomeWaterPageComponents/TodayWaterList/TodayWaterList';
import DailyNorma from '../components/HomePageComponents/DailyNorma/DailyNorma';
import { useContext } from 'react';
import { ModalContext } from '../context';
import { AddWaterModal } from '../components/HomePageComponents/AddWaterModal/AddWaterModal';

import { WaterRatioPanel } from '../components/HomePageComponents/WaterRatioPanel/WaterRationPanel';

const HomeWaterPage = () => {
  const { openModal } = useContext(ModalContext);

  const handleAddWaterClick = () => {
    openModal(
      <>
        <AddWaterModal />
      </>
    );
  };

  return (
    <HomePageContainer>
      <DailyNormaBoxWrapper>
        <DailyNorma></DailyNorma>
        <WaterRatioPanel handleAddWaterClick={handleAddWaterClick}></WaterRatioPanel>
      </DailyNormaBoxWrapper>
      <TodayAndCalendarWrapper>
        <TodayWaterList handleAddWaterClick={handleAddWaterClick}></TodayWaterList>
        <MonthStateTable></MonthStateTable>
      </TodayAndCalendarWrapper>
    </HomePageContainer>
  );
};

export default HomeWaterPage;
