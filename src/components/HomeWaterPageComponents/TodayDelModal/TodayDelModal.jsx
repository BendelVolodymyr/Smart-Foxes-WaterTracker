import { useContext } from 'react';
import { ModalContext } from '../../../context';
import {
  ButtonCns,
  ButtonDlt,
  DialogActions,
  PortionDelModalWrapper,
} from './TodayDelModal.styled';

const TodayDelModal = ({ id }) => {
  const { closeModal } = useContext(ModalContext);
  console.log(id);
  const handleDelete = () => {
    // Тут  логіка для виклику запиту на сервер для видалення

    closeModal();
  };

  return (
    <PortionDelModalWrapper>
      <h3>Delete entry</h3>

      <p>Are you sure you want to delete the entry?</p>

      <DialogActions>
        <ButtonCns type="button" onClick={() => closeModal()}>
          Cancel
        </ButtonCns>
        <ButtonDlt type="submit" onClick={handleDelete}>
          Delete
        </ButtonDlt>
      </DialogActions>
    </PortionDelModalWrapper>
  );
};

export default TodayDelModal;
