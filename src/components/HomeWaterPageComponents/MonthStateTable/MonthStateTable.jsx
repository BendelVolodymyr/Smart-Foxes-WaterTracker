import { useEffect, useState } from 'react';
import DatePaginator from '../DatePaginator/DatePaginator';
import Popover from '@mui/material/Popover';
import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';
import { startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { useDispatch } from 'react-redux';
import {
  MonthComponentWrapper,
  PaginatorBlock,
} from './MonthStateTable.styled';
import {
  DayCell,
  DayCircle,
  DayNumber,
  DayPercentage,
  DaysGrid,
} from './DayGreed.styled';
import { portionsPerMonth } from '../../../redux/waters/operations';
import useWater from '../../../hooks/useWaters';

const MonthStateTable = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth());
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const monthData = useWater().waterMonthList;

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    const startOfMonthDate = startOfMonth(selectedDate);

    const endOfMonthDate = endOfMonth(selectedDate);

    setCurrentMonth(selectedDate.getMonth());
    dispatch(
      portionsPerMonth({ startDate: startOfMonthDate, endDate: endOfMonthDate })
    );
  }, [currentMonth, dispatch, selectedDate]);

  const handleDayClick = (event, date) => {
    setSelectedDate(date);
    setAnchorEl(event.currentTarget);
  };

  const selectedDayData =
    monthData &&
    monthData.find(dayData => {
      const [dayOfMonth] = dayData.date.split(',');
      return parseInt(dayOfMonth) === selectedDate.getDate();
    });

  return (
    <MonthComponentWrapper>
      <PaginatorBlock>
        <h3>Month</h3>
        <DatePaginator
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setCurrentMonth={setCurrentMonth}
        />
      </PaginatorBlock>

      {/* <DaysGrid>{days}</DaysGrid> */}

      <DaysGrid>
        {eachDayOfInterval({
          start: startOfMonth(selectedDate),
          end: endOfMonth(selectedDate),
        }).map((day, index) => {
          const dayOfMonth = day.getDate();
          const dayData = monthData.find(data => {
            const [dayNum] = data.date.split(',');
            return parseInt(dayNum) === dayOfMonth;
          });
          const percentagePerDay = dayData ? dayData.percentagePerDay : null;

          return (
            <DayCell key={index} onClick={event => handleDayClick(event, day)}>
              <DayCircle percentage={percentagePerDay}>
                <DayNumber>{dayOfMonth}</DayNumber>
              </DayCircle>
              <DayPercentage>{percentagePerDay || 0}%</DayPercentage>
            </DayCell>
          );
        })}
      </DaysGrid>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <DaysGeneralStats
          selectedDate={selectedDate}
          selectedDayData={selectedDayData}
        />
      </Popover>
    </MonthComponentWrapper>
  );
};

export default MonthStateTable;
