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
  // waterRate**selector

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
        <NumberDailyNorma> {2} L</NumberDailyNorma>{/*waterRate*/}
        <ButtonEditNorma onClick={handleEditButtonClick}>Edit</ButtonEditNorma>
      </DailyWrapper>
      {modalOpen && <DailyNormaModal onClose={closeModal}></DailyNormaModal>}
    </DailyWaterWrapper>
  );
};

export default DailyNorma;
