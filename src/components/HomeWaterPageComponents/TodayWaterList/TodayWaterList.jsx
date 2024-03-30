// import { makeStyles } from '@mui/styles';
// import { TodayBoxWrapper } from './TodayWaterList.styled';
// import {
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
//   IconButton,
// } from '@mui/material';
// import { FaRegEdit } from 'react-icons/fa';
// import { RiDeleteBin6Line } from 'react-icons/ri';

// const useStyles = makeStyles((theme) => ({
//   iconButton: {
//     marginRight: theme.spacing(1),
//   },
// }));

// const TodayWaterList = ({ handleAddWaterClick }) => {
//   const classes = useStyles();
//   const waterPortions = [
//     { id: 1, amount: '250', time: '2024-03-30T20:00:00.000Z' },
//   ]; // тимчасова заглушка

//   const handleDelete = (id) => {
//     console.log('delete', id);
//   };

//   const handleEdit = (portion) => {
//     console.log('edit', portion);
//   };

//   return (
//     <TodayBoxWrapper>
//       <Typography variant="h5">Today</Typography>
//       {waterPortions && waterPortions.length > 0 && (
//         <List>
//           {waterPortions.map((portion, index) => (
//             <ListItem key={index}>
//               <ListItemText
//                 primary={`${portion.amount} ml`}
//                 secondary={`${new Date(portion.time).getHours()}:${new Date(
//                   portion.time
//                 ).getMinutes()}`}
//               />
//               <ListItemSecondaryAction>
//                 <IconButton
//                   edge="end"
//                   className={classes.iconButton}
//                   onClick={() => handleEdit(portion)}
//                 >
//                   <FaRegEdit />
//                 </IconButton>
//                 <IconButton
//                   edge="end"
//                   className={classes.iconButton}
//                   onClick={() => handleDelete(portion.id)}
//                 >
//                   <RiDeleteBin6Line />
//                 </IconButton>
//               </ListItemSecondaryAction>
//             </ListItem>
//           ))}
//         </List>
//       )}
//       <button onClick={handleAddWaterClick}>Add water</button>
//     </TodayBoxWrapper>
//   );
// };

// export default TodayWaterList;

import {
  Button,
  CupSvg,
  DeleteSvg,
  EditSvg,
  ListButtons,
  TodayBoxWrapper,
} from './TodayWaterList.styled';

const TodayWaterList = ({ handleAddWaterClick }) => {
  const waterPortions = [{ id: 1, amount: '250', time: '12:10' }];

  const handleDelete = (id) => {
    console.log('delete', id);
  };

  const handleEdit = (portion) => {
    console.log('edit', portion);
  };

  return (
    <TodayBoxWrapper>
      <h2>Today</h2>
      {waterPortions && waterPortions.length > 0 && (
        <ul>
          {waterPortions.map((portion) => (
            <li key={portion.id}>
              <div>
                <CupSvg />
                <span>{`${portion.amount} ml `}</span>
                <span>{portion.time}</span>
                <ListButtons>
                  <Button onClick={() => handleEdit(portion)}>
                    <EditSvg />
                  </Button>
                  <Button onClick={() => handleDelete(portion.id)}>
                    <DeleteSvg />
                  </Button>
                </ListButtons>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleAddWaterClick}>Add water</button>
    </TodayBoxWrapper>
  );
};

export default TodayWaterList;
