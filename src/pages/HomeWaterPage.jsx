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

//заглушка для модалки
const AddWaterModal = () => {
  return <div> Тут колись буде модалка AddWaterModal</div>;
};

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
        {/* <WaterRatioPanel andleAddWaterClick={handleAddWaterClick}></WaterRatioPanel> */}
      </DailyNormaBoxWrapper>
      <TodayAndCalendarWrapper>
        <TodayWaterList
          handleAddWaterClick={handleAddWaterClick}
        ></TodayWaterList>
        <MonthStateTable></MonthStateTable>
      </TodayAndCalendarWrapper>
    </HomePageContainer>
  );
};

export default HomeWaterPage;
