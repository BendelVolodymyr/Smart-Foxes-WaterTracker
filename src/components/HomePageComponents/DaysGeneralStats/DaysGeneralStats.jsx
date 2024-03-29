import { format } from 'date-fns';
import {
  ModalContainer,
  PopupDate,
  StatItem,
  StatsList,
} from './DaysGeneralStats.styled';

const DaysGeneralStats = ({ selectedDate }) => {
  console.log(selectedDate);
  const monthName = format(selectedDate, 'MMMM');
  const day = selectedDate.getDate();
  return (
    <ModalContainer>
      <PopupDate>
        {' '}
        {day},{monthName}
      </PopupDate>
      <StatsList>
        <StatItem>Daily Norma: 0</StatItem>
        <StatItem>Fulfillment of the daily norm: 0</StatItem>
        <StatItem>How many servings of water: 0</StatItem>
      </StatsList>
    </ModalContainer>
  );
};

export default DaysGeneralStats;
