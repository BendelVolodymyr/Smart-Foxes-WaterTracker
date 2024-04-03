import formatTime from '../../../helpers/formatTime';
import {
  AddWaterBtn,
  ButtonDelete,
  ButtonEdit,
  DeleteSvg,
  EditSvg,
  GlassSvg,
  ListButtons,
  ListContext,
  PlusSvg,
  Portion,
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
  //заглушки для хендлерів
  const handleDelete = (id) => {
    console.log('delete', id);
  };

  const handleEdit = (portion) => {
    console.log('edit', portion);
  };

  return (
    <TodayBoxWrapper>
      <h3>Today</h3>
      {waterPortions && waterPortions.length > 0 && (
        <PortionsList>
          {waterPortions.map((portion) => (
            <li key={portion.id}>
              <ListContext>
                <GlassSvg />
                <Portion>{`${portion.portion} ml `}</Portion>
                <span>{formatTime(portion.date, true)}</span>
              </ListContext>
              <ListButtons>
                <ButtonEdit onClick={() => handleEdit(portion)}>
                  <EditSvg />
                </ButtonEdit>
                <ButtonDelete onClick={() => handleDelete(portion.id)}>
                  <DeleteSvg />
                </ButtonDelete>
              </ListButtons>
            </li>
          ))}
        </PortionsList>
      )}
      <AddWaterBtn onClick={handleAddWaterClick}>
        <PlusSvg /> Add water
      </AddWaterBtn>
    </TodayBoxWrapper>
  );
};

export default TodayWaterList;
