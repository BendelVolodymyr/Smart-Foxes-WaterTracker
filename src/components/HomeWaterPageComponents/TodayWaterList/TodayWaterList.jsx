import { useContext, useEffect } from 'react';
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

import TodayDelModal from '../TodayDelModal/TodayDelModal';
import { ModalContext } from '../../../context';
import useWater from '../../../hooks/useWaters';
import { useDispatch } from 'react-redux';
import { portionsPerDay } from '../../../redux/waters/operations';
import { AddWaterModal } from '../../HomePageComponents/AddWaterModal/AddWaterModal';

// import TodayEditModal from './TodayEditModal';

// заглушка для модалки
const TodayEditModal = () => {
  return <div> Тут колись буде модалка TodayEditModal</div>;
};

const TodayWaterList = ({ handleAddWaterClick }) => {
  const { openModal } = useContext(ModalContext);
  // const [selectedPortion, setSelectedPortion] = useState(null);
  const waterDayData = useWater().waterDayList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(portionsPerDay());
  }, [dispatch]);

  const handleDelete = (id) => {
    openModal(
      <>
        <TodayDelModal id={id} />
      </>
    );
  };

  const handleEdit = (portion) => {
    // setSelectedPortion(portion);

    //тут поки що заглушка TodayEditModal
    openModal(
      <>
        <AddWaterModal portion={portion} />
      </>
    );
  };

  return (
    <TodayBoxWrapper>
      <h3>Today</h3>
      {waterDayData && waterDayData.length > 0 && (
        <PortionsList>
          {waterDayData.map((portion) => (
            <li key={portion._id}>
              <ListContext>
                <GlassSvg />
                <Portion>{`${portion.waterVolume} ml `}</Portion>
                <span>{formatTime(portion.dateAdded, true)}</span>
              </ListContext>
              <ListButtons>
                <ButtonEdit onClick={() => handleEdit(portion)}>
                  <EditSvg />
                </ButtonEdit>
                <ButtonDelete onClick={() => handleDelete(portion._id)}>
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
