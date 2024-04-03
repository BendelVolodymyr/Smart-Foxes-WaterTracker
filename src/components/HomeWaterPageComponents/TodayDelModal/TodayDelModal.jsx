import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useContext, useEffect } from 'react';
import { ModalContext } from '../../../context';

const TodayDelModal = ({ id }) => {
  const { closeModal } = useContext(ModalContext);
  useEffect(() => {
    console.log('я модалка для видалення');
  }, []);

  const handleDelete = () => {
    console.log(id);
    console.log('їдемо на бек');

    // Тут  логіка для виклику запиту на сервер для видалення

    closeModal();
  };

  return (
    <>
      <DialogTitle>Delete entry</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete the entry?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeModal()} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDelete} $color="error">
          Delete
        </Button>
      </DialogActions>
    </>
  );
};

export default TodayDelModal;
