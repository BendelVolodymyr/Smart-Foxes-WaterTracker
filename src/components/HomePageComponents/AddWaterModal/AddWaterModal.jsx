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
  ModalPortionInfo,
  NoPortion,
} from './AddWaterModal.styled';
import useWater from '../../../hooks/useWaters';
import { formatDate } from '../../../helpers/formatedDate';

import { addPortion, portionsPerDay, updatePortion } from '../../../redux/waters/operations';
import {
  GlassSvg,
  Portion,
} from '../../HomeWaterPageComponents/TodayWaterList/TodayWaterList.styled';
import formatTime from '../../../helpers/formatTime';
import { ModalContext } from '../../../context';

export const AddWaterModal = ({ portion }) => {
  const dispatch = useDispatch();

  const [newWoter, setNewWoter] = useState(0);
  const [waterUsed, setWaterUsed] = useState(portion ? portion.waterVolume : 0);
  const [time, setTime] = useState(
    portion ? formatTime(portion.dateAdded) : formatTime(new Date())
  );
  const [timeError, setTimeError] = useState('');
  const [waterUsedError, setWaterUsedError] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { closeModal } = useContext(ModalContext);
  const { waterDayList } = useWater();
  const list = waterDayList || [];

  const handleWaterUsedChange = (e) => {
    const value = parseFloat(e.target.value);
    const roundedValue = Math.round(value);

    setWaterUsed(roundedValue);
  };
  const handleInputFocus = () => {
    setIsInputFocused(true);
    setTimeError('');
    setWaterUsedError('');
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
    setNewWoter(waterUsed);
  };
  const handleToggle = (e) => {
    switch (e.currentTarget.id) {
      case 'increment': {
        const incrementedWater = Math.min(waterUsed + 50, 3000);
        setWaterUsed(incrementedWater);
        setNewWoter(incrementedWater);
        break;
      }
      case 'decrement': {
        const decrementedWater = Math.max(0, waterUsed - 50);
        setWaterUsed(decrementedWater);
        setNewWoter(decrementedWater);
        break;
      }
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

    if (!waterUsed || waterUsed < 1) {
      setWaterUsedError('Please enter the amount of water consumed.');
      return;
    }
    if (waterUsed > 3000) {
      setWaterUsedError('Maximum allowed is 3000 ml.');
      return;
    }
    //кейс для editModal
    if (portion) {
      const dataToUpdate = {
        id: portion._id,
        date: isoDate,
        waterVolume: newWoter,
      };
      await dispatch(updatePortion(dataToUpdate));
      setWaterUsed(0);
      closeModal();
      dispatch(portionsPerDay());
    }
    //кейс для addModal
    else {
      const isValidTime = list ? list.find((portion) => portion.dateAdded === isoDate) : isoDate;

      if (isValidTime) {
        setTimeError(' A portion already exists for this time.');
        return;
      }
      const data = {
        waterVolume: newWoter,
        date: isoDate,
      };

      await dispatch(addPortion(data));
      setWaterUsed(0);
      closeModal();
      dispatch(portionsPerDay());
    }
  };

  const title = portion ? 'Edit the entered amount of water' : 'Add water';
  const dataTitle = portion ? 'Correct entered data: ' : 'Choose a value:';

  return (
    <ModalContainer>
      <HeadModal>{title}</HeadModal>
      {portion && (
        <ModalPortionInfo>
          <GlassSvg />
          <Portion>{`${portion.waterVolume} ml `}</Portion>
          <span>{formatTime(portion.dateAdded, true)}</span>
        </ModalPortionInfo>
      )}

      {list.length === 0 && <NoPortion>No notes yet</NoPortion>}

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
        {timeError && <ErrorText>&#9888; {timeError}</ErrorText>}
      </RecordingTimeLabel>
      <WaterUsedLabel>
        <WaterUsedSpan>Enter the value of the water used:</WaterUsedSpan>
        <WaterUsedInput
          name="waterUsed"
          type="number"
          step={50}
          value={waterUsed}
          onChange={handleWaterUsedChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          pattern="[0-9]{1,4}"
          max={3000}
          required
        />
        {waterUsedError && (
          <ErrorText hideonerror={isInputFocused ? 'true' : 'false'}>
            {' '}
            &#9888; {waterUsedError}
          </ErrorText>
        )}
      </WaterUsedLabel>
      <ContainerSaveResult>
        <WaterInputed> {newWoter ? newWoter : 0} ml</WaterInputed>
        <ButtonSave onClick={handleSave}>Save</ButtonSave>
      </ContainerSaveResult>
    </ModalContainer>
  );
};
