import { startOfMonth, endOfMonth } from 'date-fns';

import {
  DayCell,
  DayCircle,
  DayNumber,
  DayPercentage,
  DaysGrid,
} from './DayList.styled';

const DaysList = ({ selectedDate, onDayClick }) => {
  const startOfMonthDate = startOfMonth(selectedDate);
  const endOfMonthDate = endOfMonth(selectedDate);
  const daysInMonth = endOfMonthDate.getDate() - startOfMonthDate.getDate() + 1;

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      i
    );
    days.push(
      <DayCell key={i} onClick={(event) => onDayClick(event, date)}>
        <DayCircle percentage={100}>
          <DayNumber>{i}</DayNumber>
        </DayCircle>
        <DayPercentage>100%</DayPercentage>
      </DayCell>
    );
  }

  return <DaysGrid>{days}</DaysGrid>;
};

export default DaysList;
