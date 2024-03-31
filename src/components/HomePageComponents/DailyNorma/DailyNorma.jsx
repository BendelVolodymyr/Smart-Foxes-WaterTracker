import { useState } from 'react';
import {
  ButtonEditNorma,
  DailyNormaP,
  DailyWaterWrapper,
  NumberDailyNorma,
  DailyWrapper,
} from './DailyNorma.styled';

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
      </DailyWrapper>
    </DailyWaterWrapper>
  );
};

export default DailyNorma;
