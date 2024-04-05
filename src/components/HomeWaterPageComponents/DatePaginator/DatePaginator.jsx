import { format, addMonths, isBefore, isAfter } from 'date-fns';
import { NextSvg, Paginator, PrevSvg } from './DatePaginator.styled';

const DatePaginator = ({ selectedDate, setSelectedDate, setCurrentMonth }) => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const isPrevDisabled = isBefore(selectedDate, addMonths(new Date(), -12));

  const isNextDisabled = isAfter(selectedDate, new Date(currentYear, currentMonth, 1));

  const monthName = format(selectedDate, 'MMMM');
  const year = selectedDate.getFullYear();

  const handlePrevClick = () => {
    setSelectedDate(addMonths(selectedDate, -1));
    setCurrentMonth((currentMonth) => currentMonth - 1);
  };

  const handleNextClick = () => {
    setSelectedDate(addMonths(selectedDate, 1));
    setCurrentMonth((currentMonth) => currentMonth + 1);
  };

  return (
    <Paginator>
      <button onClick={handlePrevClick} disabled={isPrevDisabled}>
        <PrevSvg disabled={isPrevDisabled} />
      </button>
      <span>{`${monthName}, ${year}`}</span>
      <button onClick={handleNextClick} disabled={isNextDisabled}>
        <NextSvg disabled={isNextDisabled} />
      </button>
    </Paginator>
  );
};

export default DatePaginator;
