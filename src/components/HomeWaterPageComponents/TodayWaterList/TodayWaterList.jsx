import { useContext, useState } from 'react';
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

//заглушка для модалки
const TodayEditModal = () => {
  return <div> Тут колись буде модалка TodayEditModal</div>;
};

const TodayWaterList = ({ handleAddWaterClick }) => {
  //заглушка. замінити на дані зі стейту
  const waterDayList = [
    { id: 1, portion: '250', date: '2024-03-30T20:00:00.000Z' },
    { id: 2, portion: '250', date: '2024-03-30T10:00:00.000Z' },
    { id: 3, portion: '250', date: '2024-03-30T15:00:00.000Z' },
    { id: 4, portion: '250', date: '2024-03-30T18:00:00.000Z' },
    { id: 5, portion: '250', date: '2024-03-30T19:00:00.000Z' },
    { id: 6, portion: '250', date: '2024-03-30T20:00:00.000Z' },
  ];

  const { openModal } = useContext(ModalContext);
  const [selectedPortion, setSelectedPortion] = useState(null);

  //заглушки для хендлерів
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

    openModal(
      <>
        <TodayEditModal portion={portion} />
      </>
    );
  };

  return (
    <TodayBoxWrapper>
      <h3>Today</h3>
      {waterDayList && waterDayList.length > 0 && (
        <PortionsList>
          {waterDayList.map((portion) => (
            <li key={portion.id}>
              <ListContext>
                <GlassSvg />
                <Portion>{`${portion.portion} ml `}</Portion>
                <span>{formatTime(portion.date, true)}</span>
              </ListContext>
              <ListButtons>
                <ButtonEdit onClick={() => handleEdit(portion)}>
                  <EditSvg />
                </ButtonEdit>
                <ButtonDelete onClick={() => handleDelete(portion.id)}>
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
