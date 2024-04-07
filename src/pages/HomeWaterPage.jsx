import MonthStateTable from '../components/HomeWaterPageComponents/MonthStateTable/MonthStateTable';

import {
  DailyNormaBoxWrapper,
  HomePageContainer,
  TodayAndCalendarWrapper,
} from './HomeWaterPage.styled';
import TodayWaterList from '../components/HomeWaterPageComponents/TodayWaterList/TodayWaterList';
import DailyNorma from '../components/HomePageComponents/DailyNorma/DailyNorma';
import { useContext, useEffect } from 'react';
import { ModalContext } from '../context';
import { AddWaterModal } from '../components/HomePageComponents/AddWaterModal/AddWaterModal';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';
// import { refreshUser } from '../redux/auth/operations';

//заглушка для модалки
// const AddWaterModal = () => {
//   return <div> Тут колись буде модалка AddWaterModal</div>;
// };

const HomeWaterPage = () => {
  const dispatch = useDispatch();

  const { openModal } = useContext(ModalContext);

  const handleAddWaterClick = () => {
    openModal(
      <>
        <AddWaterModal />
      </>
    );
  };
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <HomePageContainer>
      <DailyNormaBoxWrapper>
        <DailyNorma></DailyNorma>
        {/* <WaterRatioPanel andleAddWaterClick={handleAddWaterClick}></WaterRatioPanel> */}
      </DailyNormaBoxWrapper>
      <TodayAndCalendarWrapper>
        <TodayWaterList handleAddWaterClick={handleAddWaterClick}></TodayWaterList>
        <MonthStateTable></MonthStateTable>
      </TodayAndCalendarWrapper>
    </HomePageContainer>
  );
};

export default HomeWaterPage;
