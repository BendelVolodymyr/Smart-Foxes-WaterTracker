import { format, addMonths, isBefore, isAfter } from 'date-fns';
import { NextSvg, Paginator, PaginatorBtn, PrevSvg } from './DatePaginator.styled';

const DatePaginator = ({ selectedDate, setSelectedDate, setCurrentMonth, setSelectedDay }) => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const isPrevDisabled = isBefore(selectedDate, addMonths(new Date(), -12));
  const isNextDisabled = isAfter(selectedDate, new Date(currentYear, currentMonth, 1));
  const monthName = format(selectedDate, 'MMMM');
  const year = selectedDate.getFullYear();

  const handlePrevClick = () => {
    setSelectedDate(addMonths(selectedDate, -1));
    setSelectedDay(null);
    setCurrentMonth((currentMonth) => currentMonth - 1);
  };

  const handleNextClick = () => {
    setSelectedDate(addMonths(selectedDate, 1));
    setSelectedDay(null);
    setCurrentMonth((currentMonth) => currentMonth + 1);
  };

  return (
    <Paginator>
      <PaginatorBtn onClick={handlePrevClick} disabled={isPrevDisabled}>
        <PrevSvg />
      </PaginatorBtn>
      <span>{`${monthName}, ${year}`}</span>
      <PaginatorBtn onClick={handleNextClick} disabled={isNextDisabled}>
        <NextSvg />
      </PaginatorBtn>
    </Paginator>
  );
};

export default DatePaginator;
