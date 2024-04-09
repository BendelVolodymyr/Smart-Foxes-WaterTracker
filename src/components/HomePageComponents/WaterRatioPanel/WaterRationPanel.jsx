
import { AddWaterBtn, PlusSvg, WaterRatio, WaterRatioContainer } from './WaterRatioPanel.styled';


export const WaterRatioPanel = ({ handleAddWaterClick }) => {
  return (
    <WaterRatioContainer>
      <WaterRatio type="range" />
      <AddWaterBtn onClick={handleAddWaterClick}>
        <PlusSvg /> Add water
      </AddWaterBtn>
    </WaterRatioContainer>
  );
};
