// import { startOfMonth, endOfMonth } from 'date-fns';

// import { DayCell, DayCircle, DayNumber, DayPercentage, DaysGrid } from './DayList.styled';
// import { portionsPerMonth } from '../../../redux/waters/operations';
// import { useDispatch } from 'react-redux';

// const DaysList = ({ selectedDate, setSelectedDate, setAnchorEl }) => {
//   const dispatch = useDispatch();

//   const startOfMonthDate = startOfMonth(selectedDate);
//   const endOfMonthDate = endOfMonth(selectedDate);
//   const daysInMonth = endOfMonthDate.getDate() - startOfMonthDate.getDate() + 1;

//   const handleDayClick = (event, date) => {
//     setSelectedDate(date);
//     setAnchorEl(event.currentTarget);
//     console.log(endOfMonthDate);
//     dispatch(portionsPerMonth({ startOfMonthDate, endOfMonthDate }));
//   };

//   const days = [];
//   for (let i = 1; i <= daysInMonth; i++) {
//     const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i);
//     days.push(
//       <DayCell key={i} onClick={(event) => handleDayClick(event, date)}>
//         <DayCircle $percentage={100}>
//           <DayNumber>{i}</DayNumber>
//         </DayCircle>
//         <DayPercentage>100%</DayPercentage>
//       </DayCell>
//     );
//   }

//   return <DaysGrid>{days}</DaysGrid>;
// };

// export default DaysList;
