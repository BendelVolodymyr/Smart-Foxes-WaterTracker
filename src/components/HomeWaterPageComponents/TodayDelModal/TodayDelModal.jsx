import { useContext } from 'react';
import { ModalContext } from '../../../context';
import {
  ButtonCns,
  ButtonDlt,
  DialogActions,
  PortionDelModalWrapper,
} from './TodayDelModal.styled';
import { useDispatch } from 'react-redux';
import { deletePortion, portionsPerDay } from '../../../redux/waters/operations';

const TodayDelModal = ({ id }) => {
  const { closeModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const handleDelete = async () => {
    await dispatch(deletePortion(id));
    closeModal();
    dispatch(portionsPerDay());
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
