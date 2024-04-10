import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import formatTime from '../../../helpers/formatTime';
import { ModalContext } from '../../../context';
import useWater from '../../../hooks/useWaters';
import { portionsPerDay } from '../../../redux/waters/operations';

import TodayDelModal from '../TodayDelModal/TodayDelModal';
import { AddWaterModal } from '../../HomePageComponents/AddWaterModal/AddWaterModal';

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

const TodayWaterList = ({ handleAddWaterClick }) => {
  const { openModal } = useContext(ModalContext);

  const waterDayData = useWater().waterDayList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(portionsPerDay());
  }, [dispatch]);

  const handleDelete = (id) => {
    openModal(
      <>
        <TodayDelModal id={id} />
      </>
    );
  };

  const handleEdit = (portion) => {
    openModal(
      <>
        <AddWaterModal portion={portion} />
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
                <ButtonEdit onClick={() => handleEdit(portion)}>
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
