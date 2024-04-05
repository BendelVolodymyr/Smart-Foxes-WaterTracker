import { useContext, useEffect, useState } from 'react';
import formatTime from '../../../helpers/formatTime';
import {
  AddWaterBtn,
  ButtonDelete,
  ButtonEdit,
  DeleteSvg,
  EditSvg,
  GlassSvg,
  ListButtons,
  ListContext,
  PlusSvg,
  Portion,
  PortionsList,
  TodayBoxWrapper,
} from './TodayWaterList.styled';

import TodayDelModal from '../TodayDelModal/TodayDelModal';
import { ModalContext } from '../../../context';
import useWater from '../../../hooks/useWaters';
import { useDispatch } from 'react-redux';
import { portionsPerDay } from '../../../redux/waters/operations';

//заглушка для модалки
const TodayEditModal = () => {
  return <div> Тут колись буде модалка TodayEditModal</div>;
};

const TodayWaterList = ({ handleAddWaterClick }) => {
  //заглушка. замінити на дані зі стейту
  // const waterDayList = [
  //   {
  //     _id: '660d1669c6da2477d73d6371',
  //     dateAdded: '2024-04-13T02:40:00.000Z',
  //     waterRate: 2000,
  //     waterVolume: 200,
  //     owner: '660d1669c6da2477d73d6371',
  //     percentage: 80,
  //   },
  //   {
  //     _id: '660d1669c6da2477d73d6372',
  //     dateAdded: '2024-04-13T02:40:00.000Z',
  //     waterRate: 2000,
  //     waterVolume: 200,
  //     owner: '660d1669c6da2477d73d6371',
  //     percentage: 80,
  //   },
  // ];

  const { openModal } = useContext(ModalContext);
  const [selectedPortion, setSelectedPortion] = useState(null);
  const waterDayData = useWater().waterDayList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(portionsPerDay());
  }, []);

  const handleDelete = (id) => {
    openModal(
      <>
        <TodayDelModal id={id} />
      </>
    );
  };

  const handleEdit = (portion) => {
    setSelectedPortion(portion);
    console.log(selectedPortion);
    //тут поки що заглушка TodayEditModal
    openModal(
      <>
        <TodayEditModal portion={portion} />
      </>
    );
  };

  return (
    <TodayBoxWrapper>
      <h3>Today</h3>
      {waterDayData && waterDayData.length > 0 && (
        <PortionsList>
          {waterDayData.map((portion) => (
            <li key={portion._id}>
              <ListContext>
                <GlassSvg />
                <Portion>{`${portion.waterVolume} ml `}</Portion>
                <span>{formatTime(portion.dateAdded, true)}</span>
              </ListContext>
              <ListButtons>
                <ButtonEdit onClick={() => handleEdit(portion._id)}>
                  <EditSvg />
                </ButtonEdit>
                <ButtonDelete onClick={() => handleDelete(portion._id)}>
                  <DeleteSvg />
                </ButtonDelete>
              </ListButtons>
            </li>
          ))}
        </PortionsList>
      )}
      <AddWaterBtn onClick={handleAddWaterClick}>
        <PlusSvg /> Add water
      </AddWaterBtn>
    </TodayBoxWrapper>
  );
};

export default TodayWaterList;
