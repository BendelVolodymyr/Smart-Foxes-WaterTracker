import styled from 'styled-components';

const TodayBoxWrapper = styled.div`
  display: block;
  width: 100%;
  height: 260px;
`;

const TodayWaterList = (handleAddWaterClick) => {
  return (
    <TodayBoxWrapper>
      <h2>Today</h2>
      <button onClick={handleAddWaterClick}>Add water</button>
    </TodayBoxWrapper>
  );
};

export default TodayWaterList;
