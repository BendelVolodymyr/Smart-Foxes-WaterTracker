import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  ButtonSave,
  ButtonToggle,
  CalculateWater,
  ChooseSpan,
  Container,
  ContainerSaveResult,
  HeadModal,
  MinusSvg,
  ModalContainer,
  PlusSvg,
  RecordingTimeInput,
  RecordingTimeLabel,
  RecordingTimeSpan,
  WaterAmountLabel,
  WaterAmountSpan,
  WaterInputed,
  WaterUsedInput,
  WaterUsedLabel,
  WaterUsedSpan,
  WaterUsedValue,
} from './AddWaterModal.styled';
import useWater from '../../../hooks/useWaters';
import { formatDate } from '../../../helpers/formatedDate';

import { addPortion, portionsPerDay, updatePortion } from '../../../redux/waters/operations';
import {
  GlassSvg,
  ListContext,
  Portion,
} from '../../HomeWaterPageComponents/TodayWaterList/TodayWaterList.styled';
import formatTime from '../../../helpers/formatTime';

export const AddWaterModal = ({ portion }) => {
  const dispatch = useDispatch();
  const { waterDayList } = useWater();
  const [waterUsed, setWaterUsed] = useState(portion.waterVolume ? portion.waterVolume : 0);
  const [time, setTime] = useState(portion.dateAdded ? portion.dateAdded : '');

  const list = waterDayList;

  //введення юзером
  const handleWaterUsedChange = (e) => {
    const WaterParse = parseFloat(e.target.value);
    if (WaterParse > 3000) {
      alert('не більше 3000 мл');
      return;
    }
    setWaterUsed(WaterParse);
  };
  // віднімання/додавння
  const handleToggle = (e) => {
    switch (e.currentTarget.id) {
      case 'increment':
        setWaterUsed((prevValue) => prevValue + 50);
        break;
      case 'decrement':
        setWaterUsed((prevValue) => (prevValue > 0 ? prevValue - 50 : 0));
        break;
      default:
        break;
    }
  };

  //відправлення порції води
  const handleSave = async (e) => {
    e.preventDefault();
    if (portion) {
      const dataToUpdate = {
        id: portion._id,
        date: time,
        waterVolume: waterUsed,
      };
      dispatch(updatePortion(dataToUpdate));
      handleCloseModal();
      dispatch(portionsPerDay());
    } else {
      const currentDate = new Date();
      const todayDay = formatDate(currentDate);
      const isValidTime = list
        ? list.find((item) => {
            item.dateAdded === time;
          })
        : time;
      console.log(isValidTime);
      if (isValidTime) {
        alert('Не можна в один той самий час');
        setTime('');
        return;
      }
      const date = todayDay + 'T' + isValidTime;
      const data = {
        waterVolume: waterUsed,
        date,
      };

      try {
        const dataSend = dispatch(addPortion(data));
        if (!dataSend.error) {
          setWaterUsed(0);
          setTime('');
        } else {
          throw new Error();
        }
      } catch (error) {
        console.error(error);
        alert('Something went wrong');
      }
    }
  };
  const title = portion ? 'Edit the entered amount of water' : 'Add water';
  const dataTitle = portion ? 'Correct entered data: ' : 'Choose a value:';

  return (
    <ModalContainer>
      <HeadModal> {title}</HeadModal>
      {portion && (
        <ListContext>
          <GlassSvg />
          <Portion>{`${portion.waterVolume} ml `}</Portion>
          <span>{formatTime(portion.dateAdded, true)}</span>
        </ListContext>
      )}
      <Container>
        <ChooseSpan>{dataTitle}</ChooseSpan>
        <WaterAmountLabel>
          <WaterAmountSpan>Amount of water:</WaterAmountSpan>
          <CalculateWater>
            <ButtonToggle onClick={handleToggle} id="decrement">
              <MinusSvg />
            </ButtonToggle>
            <WaterUsedValue> {waterUsed ? waterUsed : 0} L</WaterUsedValue>
            <ButtonToggle onClick={handleToggle} id="increment">
              <PlusSvg />
            </ButtonToggle>
          </CalculateWater>
        </WaterAmountLabel>
      </Container>

      <RecordingTimeLabel>
        <RecordingTimeSpan>Recording time:</RecordingTimeSpan>
        <RecordingTimeInput type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </RecordingTimeLabel>
      <WaterUsedLabel>
        <WaterUsedSpan>Enter the value of the water used:</WaterUsedSpan>
        <WaterUsedInput
          type="number"
          value={waterUsed}
          onChange={handleWaterUsedChange}
          placeholder="0"
        />
      </WaterUsedLabel>
      <ContainerSaveResult>
        <WaterInputed> {waterUsed ? waterUsed : 0} Ml</WaterInputed>
        <ButtonSave onClick={handleSave}>Save</ButtonSave>
      </ContainerSaveResult>
    </ModalContainer>
  );
};
