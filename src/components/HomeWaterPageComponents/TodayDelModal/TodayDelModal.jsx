import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useEffect } from 'react';

const TodayDelModal = ({ onClose, id }) => {
  useEffect(() => {
    console.log('я модалка для видалення');
  }, []);

  const handleDelete = () => {
    console.log(id);
    console.log('їдемо на бек');

    // Тут  логіка для виклику запиту на сервер для видалення

    onClose();
  };

  return (
    <Dialog onClose={onClose}>
      <DialogTitle>Delete entry</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete the entry?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDelete} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TodayDelModal;
