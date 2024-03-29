import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Header = styled.h2`
  margin-top: 0;
`;

const StatsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StatItem = styled.li`
  margin-bottom: 10px;
`;

const DaysGeneralStats = ({ selectedDate, dailyNorm }) => {
  return (
    <ModalContainer>
      <Header> {selectedDate}</Header>
      <StatsList>
        <StatItem>Daily Norma: {dailyNorm}</StatItem>
        <StatItem>Fulfillment of the daily norm: 0</StatItem>
        <StatItem>How many servings of water: 0</StatItem>
      </StatsList>
    </ModalContainer>
  );
};

export default DaysGeneralStats;
