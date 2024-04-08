import { useEffect, useState } from 'react';
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
  WaterAmountInput,
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
import { format } from 'date-fns';
import { addPortion } from '../../../redux/waters/operations';

export const AddWaterModal = ({ firstValue, firstTime, isEditing, onClose}) => {
  const waterList = useWater().waterDayList.portions;
  
  const [waterUsed, setWaterUsed] = useState(firstValue || 0);
  const [time, setTime] = useState(
    isEditing && firstValue ? format(new Date(firstTime), 'HH:mm') : format(new Date(), 'HH:mm')
  );
  const [list, setList] = useState(waterList ? waterList : null);
  const dispatch = useDispatch();

  const handleWaterUsedChange = (e) => {
    const WaterParse = parseFloat(e.target.value);
    if (WaterParse > 3000) {
      alert('не більше 3000 мл');
      return;
    }
    setWaterUsed(WaterParse);
  };

  const handleToggle = (e) => {
    console.log(e.currentTarget.id);
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

  const handleSave = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const todayDay = formatDate(currentDate);
    const isValidTime = list
      ? list.find((item) => {
          item.time !== time;
        })
      : time;
    const date = todayDay + 'T' + isValidTime;
    const data = {
      waterVolume: waterUsed,
      date,
    };
    dispatch(addPortion(data)).thne;
    try {
      const dataSend = dispatch(addPortion(data));
      if (!dataSend.error) {
        onClose();
        setWaterUsed('');
        setTime('');
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
      onClose();
    }
  };
  useEffect(() => {
    if (isEditing) {
      setWaterUsed(firstValue || 0);
      setTime(format(firstTime, 'HH:mm'));
    } else {
      setWaterUsed(0);
      setTime(format(new Date(), 'HH:mm'));
    }
  }, [isEditing, firstValue, firstTime]);
  return (
    <ModalContainer>
      <HeadModal> Add water</HeadModal>
      {/* {Water added ? water added : <span>no notes yet</span>} */}
      <Container>
        <ChooseSpan>Choose a value:</ChooseSpan>
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
