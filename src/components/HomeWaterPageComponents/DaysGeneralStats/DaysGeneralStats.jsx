import { format } from 'date-fns';
import {
  PopoverContainer,
  PopoverDate,
  StatItem,
  StatsList,
} from './DaysGeneralStats.styled';

const DaysGeneralStats = ({ selectedDate }) => {
  console.log(selectedDate);
  const monthName = format(selectedDate, 'MMMM');
  const day = selectedDate.getDate();
  return (
    <PopoverContainer>
      <PopoverDate>
        {' '}
        {day}, {monthName}
      </PopoverDate>
      <StatsList>
        <StatItem>
          Daily Norma: <span>1.2 L</span>
        </StatItem>
        <StatItem>
          Fulfillment of the daily norm: <span>100 %</span>
        </StatItem>
        <StatItem>
          How many servings of water: <span>6</span>
        </StatItem>
      </StatsList>
    </PopoverContainer>
  );
};

export default DaysGeneralStats;
