import { TodayBoxWrapper } from './TodayWaterList.styled';

const TodayWaterList = (handleAddWaterClick) => {
  return (
    <TodayBoxWrapper>
      <h2>Today</h2>
      <button onClick={handleAddWaterClick}>Add water</button>
    </TodayBoxWrapper>
  );
};

export default TodayWaterList;
