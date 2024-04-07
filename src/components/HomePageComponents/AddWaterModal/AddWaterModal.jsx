import { useEffect, useState } from 'react';
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
import formatTime from '../../../helpers/formatTime';
import useWater from '../../../hooks/useWaters';

export const AddWaterModal = ({ firstValue, firstTime, isEditing }) => {
  const [waterUsed, setWaterUsed] = useState(firstValue || 0);
  const [time, setTime] = useState(
    isEditing && firstValue ? formatTime(new Date(firstTime)) : formatTime(new Date())
  );
  const handleWaterUsedChange = (e) => {
    setWaterUsed(parseFloat(e.target.value));
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
  const handleRecordingTime = (e) => {
    console.log(e.target.value);
    setTimeout(() => {
      setTime(e.target.value);
      console.log('Recording time:', e.target.value);
    }, 2000);
  };
  const handleSave = (e) => {
    e.preventDefault();
    let newData;
    if (isEditing) {
      newData = firstTime
        ? new Date(firstTime).toISOString().slice(0, 16)
        : new Date().toISOString();
    } else if (time) {
      const currentDate = new Date();
      const [hours, minutes] = time.split(':');
      console.log(time);
      currentDate.setHours(hours, minutes);
      console.log(currentDate);
      newData = currentDate.toISOString().slice(0, 16);
      const currentDate2 = new Date(newData);
      const newDate = new Date(currentDate2);
      newDate.setHours(currentDate2.getHours() + 2);
    }
  };
  useEffect(() => {
    if (isEditing) {
      setWaterUsed(firstValue || 0);
      setTime(formatTime(firstTime, 'HH:mm'));
    } else {
      setWaterUsed(0);
      setTime(formatTime(new Date(), 'HH:mm'));
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
        <RecordingTimeInput type="time" onChange={handleRecordingTime} value={time} />
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
        <WaterInputed> {waterUsed ? waterUsed : 0} L</WaterInputed>
        <ButtonSave onClick={handleSave}>Save</ButtonSave>
      </ContainerSaveResult>
    </ModalContainer>
  );
};

// const handleSubmit = () => {
//   let isoDate;
//   if (isEditing) {
//     // Якщо редагуємо, використовуємо вже встановлений час з існуючого запису
//     isoDate = initialTime
//       ? new Date(initialTime).toISOString().slice(0, 16)
//       : new Date().toISOString();
//   } else if (time) {
//     // Якщо створюємо новий запис і час вибрано користувачем
//     const currentDate = new Date();
//     const [hours, minutes] = time.split(':');
//     // console.log('time: 1-й if', time); //14:40
//     currentDate.setHours(hours, minutes); // Wed Jan 10 2024 14:41:34 GMT+0200 (Восточная Европа, стандартное время)
//     // console.log(currentDate);
//     isoDate = currentDate.toISOString().slice(0, 16); // 2024-01-10T12:41
//     // console.log('Исходная дата: 1-й if', isoDate);

//     const currentDate2 = new Date(isoDate);

//     // Создаем новую дату на основе текущей
//     const newDate = new Date(currentDate2);
//     newDate.setHours(currentDate2.getHours() + 2);

//     const formattedNewDate =
//       newDate.getFullYear() +
//       '-' +
//       ('0' + (newDate.getMonth() + 1)).slice(-2) +
//       '-' +
//       ('0' + newDate.getDate()).slice(-2) +
//       'T' +
//       ('0' + newDate.getHours()).slice(-2) +
//       ':' +
//       ('0' + newDate.getMinutes()).slice(-2);
//     // console.log('Исходная дата: финальный', isoDate);
//     // console.log('Новая дата: финальный', formattedNewDate);
//     isoDate = formattedNewDate;
//   }

//   const waterData = {
//     waterVolume: amount,
//     date: isoDate,
//   };
//   // console.log(waterData);
//   if (isEditing) {
//     dispatch(editWaterThunk({ _id: existingRecordId, ...waterData })).then(
//       data => {
//         if (!data.error) onClose();
//       },
//     );
//   } else {
//     dispatch(addWatersThunk(waterData)).then(data => {
//       if (!data.error) {
//         onClose();
//         setAmount(0);
//       }
//     });
//   }
// };
