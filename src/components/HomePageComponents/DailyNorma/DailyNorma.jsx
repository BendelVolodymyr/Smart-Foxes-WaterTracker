import { useState } from 'react';
import {
  ButtonEditNorma,
  DailyNormaP,
  DailyWaterWrapper,
  NumberDailyNorma,
  DailyWrapper,
} from './DailyNorma.styled';

import { DailyNormaModal } from '../DailyNormaModal/DailyNormaModal';

const DailyNorma = () => {
  const [dailyNorma, setDailyNorma] = useState(2);
  const [modalOpen, setModalOpen] = useState(false);
  const handleEditButtonClick = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <DailyWaterWrapper>
      <DailyNormaP>My daily norma</DailyNormaP>
      <DailyWrapper>
        <NumberDailyNorma>{dailyNorma} L</NumberDailyNorma>
        <ButtonEditNorma onClick={handleEditButtonClick}>Edit</ButtonEditNorma>
      </DailyWrapper>
      {modalOpen && (
        <DailyNormaModal
          onClose={closeModal}
          dailyWaterNorma={dailyNorma}
        ></DailyNormaModal>
      )}
    </DailyWaterWrapper>
  );
};

export default DailyNorma;
