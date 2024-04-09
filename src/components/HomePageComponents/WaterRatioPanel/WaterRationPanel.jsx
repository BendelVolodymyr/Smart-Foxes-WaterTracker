import { AddWaterBtn, PlusSvg, WaterRatio, WaterRatioContainer } from './WaterRatioPanel.styled';

export const WaterRatioPanel = ({ handleAddWaterClick, calcRange }) => {
  return (
    <WaterRatioContainer>
      <WaterRatio type="range" min="0" max="100" value={calcRange} readOnly />
      <AddWaterBtn onClick={handleAddWaterClick}>
        <PlusSvg /> Add water
      </AddWaterBtn>
    </WaterRatioContainer>
  );
};
