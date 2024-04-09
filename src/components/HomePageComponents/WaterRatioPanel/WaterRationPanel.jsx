import {
  AddWaterBtn,
  PlusSvg,
  WaterPanelContainer,
  WaterRatio,
  WaterRatioContainer,
  WaterRatioSpan,
} from './WaterRatioPanel.styled';

export const WaterRatioPanel = ({ handleAddWaterClick, calcRange }) => {
  return (
    <WaterRatioContainer>
      <WaterPanelContainer>
        <WaterRatioSpan>Today</WaterRatioSpan>
        <WaterRatio type="range" min="0" max="100" value={calcRange ? calcRange : 0} readOnly />
      </WaterPanelContainer>
      <AddWaterBtn onClick={handleAddWaterClick}>
        <PlusSvg /> Add water
      </AddWaterBtn>
    </WaterRatioContainer>
  );
};
