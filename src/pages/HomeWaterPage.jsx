import { useContext, useMemo } from 'react';

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
import useAuth from '../hooks/useAuth';

const HomeWaterPage = () => {
  const { openModal } = useContext(ModalContext);
  const user = useAuth().user;
  const waterDayData = useWater().waterDayList;
  const percentageWaterPanel = useMemo(() => {
    const waterVolumeArr = waterDayData.map((item) => item.waterVolume);
    let sumWaterVolume = waterVolumeArr.reduce((total, currentValue) => total + currentValue, 0);
    return Math.round((100 * sumWaterVolume) / user.waterRate);
  }, [user, waterDayData]);

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
          calcRange={percentageWaterPanel}
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
