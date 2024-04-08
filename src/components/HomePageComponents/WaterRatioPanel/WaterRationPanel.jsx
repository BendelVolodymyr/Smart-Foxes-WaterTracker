import useWater from '../../../hooks/useWaters';
import { AddWaterBtn, PlusSvg, WaterRatio, WaterRatioContainer } from './WaterRatioPanel.styled';

export const WaterRatioPanel = ({ TodayWaterList, handleAddWaterClick }) => {
  const waterList = useWater().waterDayList.portions;

  return (
    <WaterRatioContainer>
      <WaterRatio type="range" maxValue={100} minValue={0} readOnly={true} />
      <AddWaterBtn onClick={handleAddWaterClick}>
        <PlusSvg /> Add water
      </AddWaterBtn>
    </WaterRatioContainer>
  );
};
