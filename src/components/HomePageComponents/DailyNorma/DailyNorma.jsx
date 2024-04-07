import { useState } from 'react';
import {
  ButtonEditNorma,
  DailyNormaP,
  DailyWaterWrapper,
  NumberDailyNorma,
  DailyWrapper,
} from './DailyNorma.styled';
import { DailyNormaModal } from '../DailyNormaModal/DailyNormaModal';

import useAuth from '../../../hooks/useAuth';

const DailyNorma = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { user } = useAuth();
  const waterRate = user.waterRate;

  const handleEditButtonClick = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const calculateWaterRate = (waterRate / 1000).toFixed(1);

  return (
    <DailyWaterWrapper>
      <DailyNormaP>My daily norma</DailyNormaP>
      <DailyWrapper>
        <NumberDailyNorma>
          {' '}
          {calculateWaterRate ? calculateWaterRate : waterRate} L
        </NumberDailyNorma>
        {/*waterRate*/}
        <ButtonEditNorma onClick={handleEditButtonClick}>Edit</ButtonEditNorma>
      </DailyWrapper>
      {modalOpen && <DailyNormaModal onClose={closeModal}></DailyNormaModal>}
    </DailyWaterWrapper>
  );
};

export default DailyNorma;
