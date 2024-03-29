import { useEffect, useState } from 'react';
import DatePaginator from '../DatePaginator/DatePaginator';

import Popover from '@mui/material/Popover';
import DaysGeneralStats from '../DaysGeneralStats/DaysGeneralStats';
import {
  MonthComponentWrapper,
  PaginatorBlock,
} from './MonthStateTable.stuled';
import DaysList from '../DayList/DayList';

const MonthStateTable = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    console.log(selectedDate);
  });

  const handleDayClick = (event, date) => {
    setSelectedDate(date);

    setAnchorEl(event.currentTarget);
  };
  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <MonthComponentWrapper>
      <PaginatorBlock>
        <h3>Month</h3>
        <DatePaginator
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </PaginatorBlock>

      <DaysList selectedDate={selectedDate} onDayClick={handleDayClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <DaysGeneralStats selectedDate={selectedDate} />
      </Popover>
    </MonthComponentWrapper>
  );
};

export default MonthStateTable;
