import {
  AddWaterBtn,
  LeftMark,
  Mark,
  MarksContainer,
  PlusSvg,
  RightMark,
  WaterPanelContainer,
  WaterRatio,
  WaterRatioContainer,
  WaterRatioSpan,
} from './WaterRatioPanel.styled';

export const WaterRatioPanel = ({ handleAddWaterClick, calcRange }) => {
  const showMarkLabel = calcRange > 0 && calcRange < 100;
  const getMarkPosition = () => {
    const limitedPercentage = Math.min(100, Math.max(0, calcRange));
    return {
      left: `calc(${limitedPercentage}% + 4px)`,
    };
  };
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${calcRange}%`,
    };
  };
  return (
    <WaterRatioContainer>
      <WaterPanelContainer>
        <WaterRatioSpan>Today</WaterRatioSpan>
        <WaterRatio
          type="range"
          min="0"
          max="100"
          value={calcRange ? calcRange : 0}
          readOnly
          style={getBackgroundSize()}
          aria-label="Water range"
        />
        <MarksContainer>
          <LeftMark>0%</LeftMark>
          {showMarkLabel && <Mark id="waterMark" style={getMarkPosition()}>{`${calcRange}%`}</Mark>}
          <RightMark>100%</RightMark>
        </MarksContainer>
      </WaterPanelContainer>
      <AddWaterBtn onClick={handleAddWaterClick}>
        <PlusSvg /> Add water
      </AddWaterBtn>
    </WaterRatioContainer>
  );
};
