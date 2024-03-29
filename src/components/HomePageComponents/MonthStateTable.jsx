import { useState } from 'react';

import styled from 'styled-components';
import {
  format,
  startOfMonth,
  endOfMonth,
  addMonths,
  isBefore,
  isAfter,
} from 'date-fns';
import Popover from '@mui/material/Popover';
import DaysGeneralStats from './DaysGeneralStats/DaysGeneralStats';

const PaginatorBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Paginator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin: 0 5px;
  }
`;

const MonthComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DaysGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(10, 34px);
  gap: 48px 22px;
  list-style: none;
  padding: 0;
  font-size: 16px;
  justify-content: space-between;
`;

const DayCell = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const DayCircle = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ isToday }) => (isToday ? 'lightblue' : 'white')};
  border: 2px solid
    ${({ percentage }) => (percentage < 100 ? 'red' : 'transparent')};
`;

const DayNumber = styled.p`
  z-index: 1;
  margin: 0;
`;

const DayPercentage = styled.p`
  position: absolute;
  bottom: -21px;
  z-index: 0;
  margin: 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: #9ebbff;
`;

const MonthStateTable = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDayClick = (date) => (event) => {
    setSelectedDate(date);
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const renderPaginator = () => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    // const selectedMonth = selectedDate.getMonth();
    // const selectedYear = selectedDate.getFullYear();

    const isPrevDisabled = isBefore(
      selectedDate,
      addMonths(new Date(), -12) // Поки що порівнюємо з 12 місяцями тому, а надалі додати з часу реєстрації
    );
    const isNextDisabled = isAfter(
      selectedDate,
      new Date(currentYear, currentMonth, 1)
    );

    const monthName = format(selectedDate, 'MMMM');
    const year = selectedDate.getFullYear();

    return (
      <Paginator>
        <button
          onClick={() => setSelectedDate(addMonths(selectedDate, -1))} //addMonths з бібл data-fns
          disabled={isPrevDisabled}
        >
          {'<'}
        </button>
        <span>{`${monthName}, ${year}`}</span>
        <button
          onClick={() => setSelectedDate(addMonths(selectedDate, 1))}
          disabled={isNextDisabled}
        >
          {'>'}
        </button>
      </Paginator>
    );
  };

  const renderDaysList = () => {
    const startOfMonthDate = startOfMonth(selectedDate);
    const endOfMonthDate = endOfMonth(selectedDate);
    const daysInMonth =
      endOfMonthDate.getDate() - startOfMonthDate.getDate() + 1;

    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        i
      );
      days.push(
        <DayCell key={i} onClick={handleDayClick(date)}>
          <DayCircle percentage={0}>
            <DayNumber>{i}</DayNumber>
          </DayCircle>
          <DayPercentage>0%</DayPercentage>
        </DayCell>
      );
    }

    return <DaysGrid>{days}</DaysGrid>;
  };

  return (
    <MonthComponentWrapper>
      <PaginatorBlock>
        <h3>Month</h3>
        {renderPaginator()}
      </PaginatorBlock>

      {renderDaysList()}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <DaysGeneralStats />
      </Popover>
    </MonthComponentWrapper>
  );
};

export default MonthStateTable;
