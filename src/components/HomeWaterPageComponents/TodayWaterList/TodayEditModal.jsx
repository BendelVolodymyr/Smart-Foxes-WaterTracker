// import { useState } from 'react';
// import formatTime from '../../../helpers/formatTime';
// import { GlassSvg, ListContext, Portion } from '../TodayWaterList/TodayWaterList.styled';
// import { TodayEditModalWrapper } from './TodayEditModal.styled';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const TodayEditModal = ({ portion }) => {
//   const [time, setTime] = useState(formatTime(portion.dateAdded));
//   const [currentPortion] = useState(portion.waterVolume);
//   const [amount, setAmount] = useState(portion.waterVolume);

//   const handleChangeTime = (event) => {
//     setTime(event.target.value);
//   };

//   const handleChangeAmount = (event) => {
//     setAmount(event.target.value);
//   };

//   const handleDecrement = () => {
//     setAmount(amount - 50);
//   };

//   const handleIncrement = () => {
//     setAmount(amount + 50);
//   };
//   const handleSubmit = () => {
//     console.log('submit');
//   };

//   return (
//     <TodayEditModalWrapper>
//       <h3>Edit the entered amount of water</h3>
//       <ListContext style={{ display: 'flex', justifyContent: 'flex-start', width: '254px' }}>
//         <GlassSvg />
//         <Portion>{currentPortion} ml</Portion>
//         <span>{formatTime(portion.dateAdded, true)}</span>
//       </ListContext>
//       <h4>Correct entered data:</h4>
//       <div>
//         <p>Amount of water:</p>

//         <button onClick={handleDecrement}>-</button>
//         <p> {amount} ml</p>
//         <button onClick={handleIncrement}>+</button>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Recording time:
//           <DatePicker
//             selected={time}
//             onChange={handleChangeTime}
//             showTimeSelect
//             timeFormat="HH:mm"
//             timeIntervals={15}
//             // dateFormat="MMMM d, yyyy HH:mm"
//           />
//         </label>
//         <label>
//           Enter the value of the water used:
//           <input type="text" value={amount} onChange={handleChangeAmount} />
//         </label>
//         <p>{amount} ml</p>
//         <button type="submit">Save</button>
//       </form>
//     </TodayEditModalWrapper>
//   );
// };

// export default TodayEditModal;
