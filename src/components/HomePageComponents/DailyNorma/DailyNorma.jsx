import { useState } from 'react';
import {
  ButtonEditNorma,
  DailyNormaP,
  DailyWaterWrapper,
  NumberDailyNorma,
  DailyWrapper,
} from './DailyNorma.styled';
import { createPortal } from 'react-dom';
import { DailyNormaModal } from '../DailyNormaModal/DailyNormaModal';

const DailyNorma = ({ ModalEditWaterNorma }) => {
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
        {modalOpen && <DailyNormaModal onClose={closeModal}></DailyNormaModal>}
      </DailyWrapper>
    </DailyWaterWrapper>
  );
};

export default DailyNorma;
