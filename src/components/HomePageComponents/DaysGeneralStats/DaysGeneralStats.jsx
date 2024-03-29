import { format } from 'date-fns';
import styled from 'styled-components';

const ModalContainer = styled.div`
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

const DaysGeneralStats = ({ selectedDate }) => {
  // const parsedDate = new Date(selectedDate);
  console.log(selectedDate);
  const monthName = format(selectedDate, 'MMMM');
  const day = selectedDate.getDate();
  return (
    <ModalContainer>
      <Header>
        {' '}
        {day},{monthName}
      </Header>
      <StatsList>
        <StatItem>Daily Norma: 0</StatItem>
        <StatItem>Fulfillment of the daily norm: 0</StatItem>
        <StatItem>How many servings of water: 0</StatItem>
      </StatsList>
    </ModalContainer>
  );
};

export default DaysGeneralStats;
