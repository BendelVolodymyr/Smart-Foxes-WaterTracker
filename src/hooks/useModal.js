import { useSelector } from 'react-redux';
import { selectOpenModal, selectModalContent } from '../redux/modal/selectors';

const useModal = () => {
  const isOpen = useSelector(selectOpenModal);
  const content = useSelector(selectModalContent);
  return {
    isOpen,
    content,
  };
};
export default useModal;
