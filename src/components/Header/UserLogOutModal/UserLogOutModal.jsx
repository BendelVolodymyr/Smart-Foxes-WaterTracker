import { createPortal } from 'react-dom';
import {
  ButtonWrapper,
  CloseBtn,
  LogoutButton,
  Modal,
  Overlay,
  Text,
  Title,
} from './UserLogOutModal.styled';
import { ReactComponent as Close } from '../../../assets/header-icons/close-icon.svg';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
// import { logout } from '../../../redux/auth/operations';

const modalRoot = document.getElementById('modal-root');

const LogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const modalRef = useRef();

  const logOut = () => {
    // dispatch(logout());
  };

  useEffect(() => {
    const handleEscapePress = (event) => {
      if (event.code === 'Escape') {
        // setIsExpanded(false);
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapePress);
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleEscapePress);
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [onClose]);

  return createPortal(
    <Overlay>
      <Modal ref={modalRef}>
        <div style={{ position: 'relative' }}>
          <CloseBtn onClick={onClose}>
            <Close />
          </CloseBtn>

          <Title>Log out</Title>
          <Text>Do you really want to leave?</Text>
        </div>
        <ButtonWrapper>
          <LogoutButton $background={'#EF5050'} color={'#fff'} onClick={logOut}>
            Log out
          </LogoutButton>
          <LogoutButton
            $background={'#D7E3FF'}
            color={'#407BFF'}
            onClick={onClose}
          >
            Cancel
          </LogoutButton>
        </ButtonWrapper>
      </Modal>
    </Overlay>,
    modalRoot
  );
};

export default LogoutModal;
