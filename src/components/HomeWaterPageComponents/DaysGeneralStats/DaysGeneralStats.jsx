import { format } from 'date-fns';
import { PopoverContainer, PopoverDate, StatItem, StatsList } from './DaysGeneralStats.styled';

const DaysGeneralStats = ({ selectedDayData }) => {
  console.log(selectedDayData);

  // const monthName = format(selectedDate, 'MMMM');
  // const day = selectedDate.getDate();
  return (
    <PopoverContainer>
      <PopoverDate> {selectedDayData.date}</PopoverDate>
      <StatsList>
        <StatItem>
          Daily Norma: <span>{(selectedDayData.waterRate / 1000).toFixed(1)} L</span>
        </StatItem>
        <StatItem>
          Fulfillment of the daily norm: <span>{selectedDayData.percentagePerDay}%</span>
        </StatItem>
        <StatItem>
          How many servings of water: <span>{selectedDayData.totalPortions}</span>
        </StatItem>
      </StatsList>
    </PopoverContainer>
  );
};

export default DaysGeneralStats;
