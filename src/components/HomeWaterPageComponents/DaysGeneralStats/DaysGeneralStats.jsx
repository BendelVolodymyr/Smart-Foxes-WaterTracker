import { format } from 'date-fns';
import {
  PopoverContainer,
  PopoverDate,
  StatItem,
  StatsList,
} from './DaysGeneralStats.styled';

import useAuth from '../../../hooks/useAuth';

const DaysGeneralStats = ({ selectedDate, selectedDayData }) => {
  const monthName = format(selectedDate, 'MMMM');
  const day = selectedDate.getDate();

  const waterRate = useAuth().user.waterRate;

  const deyNorma = waterRate ? (waterRate / 1000).toFixed(1) : '0';

  const currentWaterRate = selectedDayData
    ? (selectedDayData.waterRate / 1000).toFixed(1)
    : deyNorma;

  const percentagePerDay = selectedDayData
    ? selectedDayData.percentagePerDay
    : '0';

  const totalPortions = selectedDayData ? selectedDayData.totalPortions : '0';

  return (
    <PopoverContainer>
      <PopoverDate>
        {' '}
        {day}, {monthName}
      </PopoverDate>
      <StatsList>
        <StatItem>
          Daily Norma: <span>{currentWaterRate} L</span>
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
