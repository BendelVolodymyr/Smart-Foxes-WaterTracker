import { useEffect, useState } from 'react';
import DatePaginator from '../DatePaginator/DatePaginator';
import Popover from '@mui/material/Popover';
import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';
import { startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { useDispatch } from 'react-redux';
import {
  MonthComponentWrapper,
  PaginatorBlock,
  // DaysGrid,
  // DayCell,
  // DayCircle,
  // DayNumber,
  // DayPercentage,
} from './MonthStateTable.styled';
import { DayCell, DayCircle, DayNumber, DayPercentage, DaysGrid } from '../DayList/DayList.styled';
import { portionsPerMonth } from '../../../redux/waters/operations';
import useWater from '../../../hooks/useWaters';

const MonthStateTable = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    const startOfMonthDate = startOfMonth(selectedDate);
    const endOfMonthDate = endOfMonth(selectedDate);
    console.log(startOfMonthDate);
    dispatch(portionsPerMonth({ startDate: startOfMonthDate, endDate: endOfMonthDate }));
    console.log(monthData);
  }, [selectedDate]);

  const handleDayClick = (event, date) => {
    setSelectedDate(date);
    setAnchorEl(event.currentTarget);
  };
  // const monthData = useWater().waterMonthList;

  const monthData = [
    {
      _id: '2024-04-01',
      waterRate: 2000,
      totalWaterDrunk: 4000,
      totalPortions: 20,
      date: '1, April',
      percentagePerDay: 90,
    },
    {
      _id: '2024-04-02',
      waterRate: 2000,
      totalWaterDrunk: 4000,
      totalPortions: 20,
      date: '2, April',
      percentagePerDay: 85,
    },
    {
      _id: '2024-04-03',
      waterRate: 1500,
      totalWaterDrunk: 4000,
      totalPortions: 20,
      date: '3, April',
      percentagePerDay: 80,
    },
    {
      _id: '2024-04-04',
      waterRate: 2000,
      totalWaterDrunk: 4000,
      totalPortions: 20,
      date: '4, April',
      percentagePerDay: 75,
    },
    {
      _id: '2024-04-05',
      waterRate: 2000,
      totalWaterDrunk: 4000,
      totalPortions: 20,
      date: '5, April',
      percentagePerDay: 70,
    },
  ];

  const selectedDayData =
    monthData &&
    monthData.find((dayData) => {
      const [dayOfMonth] = dayData.date.split(',');
      return parseInt(dayOfMonth) === selectedDate.getDate();
    });

  return (
    <MonthComponentWrapper>
      <PaginatorBlock>
        <h3>Month</h3>
        <DatePaginator selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </PaginatorBlock>

      {/* <DaysGrid>{days}</DaysGrid> */}

      <DaysGrid>
        {eachDayOfInterval({
          start: startOfMonth(selectedDate),
          end: endOfMonth(selectedDate),
        }).map((day, index) => {
          const dayOfMonth = day.getDate();
          const dayData = monthData.find((data) => {
            const [dayNum] = data.date.split(',');
            return parseInt(dayNum) === dayOfMonth;
          });
          const percentagePerDay = dayData ? dayData.percentagePerDay : null;

          return (
            <DayCell key={index} onClick={(event) => handleDayClick(event, day)}>
              <DayCircle $percentage={percentagePerDay}>
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
        <DaysGeneralStats selectedDayData={selectedDayData} />
      </Popover>
    </MonthComponentWrapper>
  );
};

export default MonthStateTable;
