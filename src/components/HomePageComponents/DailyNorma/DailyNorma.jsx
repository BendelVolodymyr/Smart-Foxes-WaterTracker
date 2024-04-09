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

const DailyNorma = ({ handleDailyNormaModal }) => {
  const { user } = useAuth();
  const waterRate = user.waterRate;
  const calculateWaterRate = (waterRate / 1000).toFixed(1);

  return (
    <DailyWaterWrapper>
      <DailyNormaP>My daily norma</DailyNormaP>
      <DailyWrapper>
        <NumberDailyNorma>{calculateWaterRate ? calculateWaterRate : waterRate} L</NumberDailyNorma>
        {/*waterRate*/}
        <ButtonEditNorma onClick={handleDailyNormaModal}>Edit</ButtonEditNorma>
      </DailyWrapper>
    </DailyWaterWrapper>
  );
};

export default DailyNorma;
