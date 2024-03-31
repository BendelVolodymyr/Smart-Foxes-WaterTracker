import formatTime from '../../../helpers/formatTime';
import {
  Button,
  CupSvg,
  DeleteSvg,
  EditSvg,
  ListButtons,
  PortionsList,
  TodayBoxWrapper,
} from './TodayWaterList.styled';

const TodayWaterList = ({ handleAddWaterClick }) => {
  //заглушка. замінити на дані зі стейту
  const waterPortions = [
    { id: 1, portion: '250', date: '2024-03-30T20:00:00.000Z' },
    { id: 2, portion: '250', date: '2024-03-30T10:00:00.000Z' },
    { id: 3, portion: '250', date: '2024-03-30T15:00:00.000Z' },
    { id: 4, portion: '250', date: '2024-03-30T18:00:00.000Z' },
    { id: 5, portion: '250', date: '2024-03-30T19:00:00.000Z' },
    { id: 6, portion: '250', date: '2024-03-30T20:00:00.000Z' },
  ];

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
        <PortionsList>
          {waterPortions.map((portion) => (
            <li key={portion.id}>
              <div>
                <CupSvg />
                <span>{`${portion.portion} ml `}</span>
                <span>{formatTime(portion.date)}</span>
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
        </PortionsList>
      )}
      <button onClick={handleAddWaterClick}>Add water</button>
    </TodayBoxWrapper>
  );
};

export default TodayWaterList;
