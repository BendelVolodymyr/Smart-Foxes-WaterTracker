import { useContext } from 'react';

import MonthStateTable from '../components/HomeWaterPageComponents/MonthStateTable/MonthStateTable';
import TodayWaterList from '../components/HomeWaterPageComponents/TodayWaterList/TodayWaterList';
import DailyNorma from '../components/HomePageComponents/DailyNorma/DailyNorma';
import { AddWaterModal } from '../components/HomePageComponents/AddWaterModal/AddWaterModal';
import { WaterRatioPanel } from '../components/HomePageComponents/WaterRatioPanel/WaterRationPanel';
import { DailyNormaModal } from '../components/HomePageComponents/DailyNormaModal/DailyNormaModal';

import { ModalContext } from '../context';
import useWater from '../hooks/useWaters';

import {
  DailyNormaBoxWrapper,
  HomePageContainer,
  TodayAndCalendarWrapper,
} from './HomeWaterPage.styled';

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
  const handleDailyNormaModal = () => {
    openModal(
      <>
        <DailyNormaModal />
      </>
    );
  };
  return (
    <HomePageContainer>
      <DailyNormaBoxWrapper>
        <DailyNorma handleDailyNormaModal={handleDailyNormaModal}></DailyNorma>
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
