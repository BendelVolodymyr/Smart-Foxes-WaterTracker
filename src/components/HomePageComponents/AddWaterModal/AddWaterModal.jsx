import {
  ButtonSave,
  ChooseSpan,
  ContainerSaveResult,
  HeadModal,
  ModalContainer,
  RecordingTimeInput,
  RecordingTimeLabel,
  RecordingTimeSpan,
  WaterAmountInput,
  WaterAmountLabel,
  WaterAmountSpan,
  WaterUsedInput,
  WaterUsedLabel,
  WaterUsedSpan,
  WaterUsedValue,
} from './AddWaterModal.styled';

export const AddWaterModal = () => {
  return (
    <ModalContainer>
      <HeadModal> Add water</HeadModal>
      <ChooseSpan>Choose a value:</ChooseSpan>
      <WaterAmountLabel>
        <WaterAmountSpan>Amount of water:</WaterAmountSpan>
        <WaterAmountInput />
      </WaterAmountLabel>
      <RecordingTimeLabel>
        <RecordingTimeSpan>Recording time:</RecordingTimeSpan>
        <RecordingTimeInput />
      </RecordingTimeLabel>
      <WaterUsedLabel>
        <WaterUsedSpan>Enter the value of the water used:</WaterUsedSpan>
        <WaterUsedInput />
      </WaterUsedLabel>
      <ContainerSaveResult>
        <WaterUsedValue> {50} L</WaterUsedValue>
        {/*WaterUsedInput */}
        <ButtonSave>Save</ButtonSave>
      </ContainerSaveResult>
    </ModalContainer>
  );
};
