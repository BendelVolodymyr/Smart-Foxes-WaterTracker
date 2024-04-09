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
import useWater from '../hooks/useWaters';

const HomeWaterPage = () => {
  const { openModal } = useContext(ModalContext);
  const water = useWater().waterDayList;
  const waterPercentageArr = water.map((item) => item.percentage);
  let sumPercentage = 0;

  waterPercentageArr.forEach((percentage) => {
    sumPercentage += percentage;
  });

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
        <WaterRatioPanel
          handleAddWaterClick={handleAddWaterClick}
          calcRange={sumPercentage}
        ></WaterRatioPanel>
      </DailyNormaBoxWrapper>
      <TodayAndCalendarWrapper>
        <TodayWaterList handleAddWaterClick={handleAddWaterClick}></TodayWaterList>
        <MonthStateTable></MonthStateTable>
      </TodayAndCalendarWrapper>
    </HomePageContainer>
  );
};

export default HomeWaterPage;
