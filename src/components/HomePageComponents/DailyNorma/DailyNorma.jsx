import { DailyNormaP, DailyWaterWrapper } from './DailyNorma.styled';

const DailyNorma = (openModal) => {
  return (
    <DailyWaterWrapper>
      <DailyNormaP>My daily norma</DailyNormaP>
      {/* <p> water litrs</p> */}
      <button onClick={openModal}>Edit</button>
    </DailyWaterWrapper>
  );
};

export default DailyNorma;
