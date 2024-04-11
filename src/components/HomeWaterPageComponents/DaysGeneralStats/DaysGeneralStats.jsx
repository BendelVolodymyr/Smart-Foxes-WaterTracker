import { format } from 'date-fns';
import useAuth from '../../../hooks/useAuth';
import { PopoverContainer, PopoverDate, StatItem, StatsList } from './DaysGeneralStats.styled';

const DaysGeneralStats = ({ selectedDate, selectedDayData }) => {
  const monthName = format(selectedDate, 'MMMM');
  const day = selectedDate.getDate();
  const waterRate = useAuth().user.waterRate;
  const dayNorma = waterRate ? (waterRate / 1000).toFixed(1) : '0';

  const waterDrunk = selectedDayData ? selectedDayData.totalWaterDrunk : 0;
  const percentagePerDay = waterRate ? Math.round((waterDrunk / waterRate) * 100) : 0;
  const totalPortions = selectedDayData ? selectedDayData.totalPortions : '0';

  return (
    <PopoverContainer>
      <PopoverDate>
        {' '}
        {day}, {monthName}
      </PopoverDate>
      <StatsList>
        <StatItem>
          Daily Norma: <span>{dayNorma} L</span>
        </StatItem>
        <StatItem>
          Fulfillment of the daily norm: <span>{percentagePerDay}%</span>
        </StatItem>
        <StatItem>
          How many servings of water: <span>{totalPortions}</span>
        </StatItem>
      </StatsList>
    </PopoverContainer>
  );
};

export default DaysGeneralStats;
