import { useState } from 'react';
import styled from 'styled-components';

const TodayBoxWrapper = styled.div`
  display: block;
  width: 100%;
  height: 260px;
`;

const TodayWaterList = () => {
  const [modalOpen, setModalOpen] = useState(false); // Стан для відстеження відкриття/закриття модального вікна напвне треба буде винести на сторінку,щоб для двох кнопок

  const handleAddWaterClick = () => {
    setModalOpen(true); // Відкрити модальне вікно при кліку на кнопку
    console.log(modalOpen);
  };
  return (
    <TodayBoxWrapper>
      <h2>Today</h2>
      <button onClick={handleAddWaterClick}>Add water</button>
      {/*надалі перенести рендер на сторінку*/}
      {/* {modalOpen && <TodayListModal onClose={() => setModalOpen(false)} />} */}
    </TodayBoxWrapper>
  );
};

export default TodayWaterList;
