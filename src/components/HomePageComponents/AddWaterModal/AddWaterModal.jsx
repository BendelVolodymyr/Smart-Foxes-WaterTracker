import { useContext, useState } from 'react';
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
  ErrorText,
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
import { ModalContext } from '../../../context';

export const AddWaterModal = ({ portion }) => {
  const dispatch = useDispatch();

  const [waterUsed, setWaterUsed] = useState(portion ? portion.waterVolume : 0);
  const [time, setTime] = useState(
    portion ? formatTime(portion.dateAdded) : formatTime(new Date())
  );
  const [timeError, setTimeError] = useState('');
  const [waterUsedError, setWaterUsedError] = useState('');

  const { closeModal } = useContext(ModalContext);
  const { waterDayList } = useWater();
  const list = waterDayList || [];

  const handleWaterUsedChange = (e) => {
    console.log('e.target.value)', e.target.value);
    const WaterParse = e.target.value;
    // console.log(WaterParse);
    // if (WaterParse > 3000) {
    //   setWaterUsedError('Не більше 3000 мл');
    // } else {
    //   setWaterUsedError('');
    // }
    setWaterUsed(WaterParse);
  };

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

  const handleSave = async (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const todayDay = formatDate(currentDate);
    const date = todayDay + 'T' + time;
    const isoDate = new Date(date).toISOString();

    //кейс для editModal
    if (portion) {
      const dataToUpdate = {
        id: portion._id,
        date: isoDate,
        waterVolume: waterUsed,
      };
      await dispatch(updatePortion(dataToUpdate));
      closeModal();
      dispatch(portionsPerDay());
    }
    //кейс для addModal
    else {
      const isValidTime = list ? list.find((portion) => portion.dateAdded === isoDate) : isoDate;
      console.log(isValidTime);
      if (isValidTime) {
        setTimeError('Не можна в один той самий час');
        return;
      }
      if (!waterUsed || waterUsed < 50) {
        setWaterUsedError('Введіть кількість випитої води  ');
        return;
      }
      if (waterUsed > 3000) {
        setWaterUsedError('Не більше 3000 мл ');
        return;
      }

      const data = {
        waterVolume: waterUsed,
        date: isoDate,
      };

      await dispatch(addPortion(data));
      closeModal();
      dispatch(portionsPerDay());

      //     try {
      //       const dataSend = await dispatch(addPortion(data));
      //       if (!dataSend.error) {
      //         closeModal();
      //         setWaterUsed(0);
      //         setTime('');
      //       } else {
      //         throw new Error();
      //       }
      //     } catch (error) {
      //       console.error(error);
      //       alert('Something went wrong');
      //       closeModal();
      //     }
    }
  };

  const title = portion ? 'Edit the entered amount of water' : 'Add water';
  const dataTitle = portion ? 'Correct entered data: ' : 'Choose a value:';

  // const noNotesInfo = list ? 'No notes yet' : '';

  return (
    <ModalContainer>
      <HeadModal>{title}</HeadModal>
      {portion && (
        <ListContext>
          <GlassSvg />
          <Portion>{`${portion.waterVolume} ml `}</Portion>
          <span>{formatTime(portion.dateAdded, true)}</span>
        </ListContext>
      )}

      {list.length === 0 && <p>No notes yet</p>}

      <Container>
        <ChooseSpan>{dataTitle}</ChooseSpan>
        <WaterAmountLabel>
          <WaterAmountSpan>Amount of water:</WaterAmountSpan>
          <CalculateWater>
            <ButtonToggle onClick={handleToggle} id="decrement">
              <MinusSvg />
            </ButtonToggle>
            <WaterUsedValue> {waterUsed ? waterUsed : 0} ml</WaterUsedValue>
            <ButtonToggle onClick={handleToggle} id="increment">
              <PlusSvg />
            </ButtonToggle>
          </CalculateWater>
        </WaterAmountLabel>
      </Container>

      <RecordingTimeLabel>
        <RecordingTimeSpan>Recording time:</RecordingTimeSpan>
        <RecordingTimeInput type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        <ErrorText>{timeError}</ErrorText>
      </RecordingTimeLabel>
      <WaterUsedLabel>
        <WaterUsedSpan>Enter the value of the water used:</WaterUsedSpan>
        <WaterUsedInput
          type="number"
          value={waterUsed}
          onChange={handleWaterUsedChange}
          placeholder="0"
          required
        />
        {waterUsedError && <ErrorText>{waterUsedError}</ErrorText>}
      </WaterUsedLabel>
      <ContainerSaveResult>
        <WaterInputed> {waterUsed ? waterUsed : 0} ml</WaterInputed>
        <ButtonSave onClick={handleSave}>Save</ButtonSave>
      </ContainerSaveResult>
    </ModalContainer>
  );
};
