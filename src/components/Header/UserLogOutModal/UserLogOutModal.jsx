import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContext } from '../../../context';

import { ButtonWrapper, LogoutButton, Modal, Text, Title } from './UserLogOutModal.styled';
import { logout } from '../../../redux/auth/operations';

const UserLogOutModal = () => {
  const dispatch = useDispatch();
  const { closeModal } = useContext(ModalContext);

  const logOut = () => {
    dispatch(logout());
    closeModal();
  };

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <Modal>
      <div>
        <Title>Log out</Title>
        <Text>Do you really want to leave?</Text>
      </div>
      <ButtonWrapper>
        <LogoutButton $background={'#D7E3FF'} $color={'#407BFF'} onClick={handleCloseModal}>
          Cancel
        </LogoutButton>
        <LogoutButton $background={'#EF5050'} $color={'#fff'} onClick={logOut}>
          Log out
        </LogoutButton>
      </ButtonWrapper>
    </Modal>
  );
};

export default UserLogOutModal;

// !================================================
// import { createPortal } from 'react-dom';
// import {
//   ButtonWrapper,
//   CloseBtn,
//   LogoutButton,
//   Modal,
//   Overlay,
//   Text,
//   Title,
// } from './UserLogOutModal.styled';
// import { ReactComponent as Close } from '../../../assets/header-icons/close-icon.svg';
// import { useEffect } from 'react';
// import { useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { logout } from '../../../redux/auth/operations';

// const modalRoot = document.getElementById('modal-root');

// const LogoutModal = ({ onClose }) => {
//   const dispatch = useDispatch();
//   // const modalRef = useRef();

//   const logOut = () => {
//     dispatch(logout());
//   };

//   return createPortal(
//     // <Overlay>
//     <Modal>
//       <div style={{ position: 'relative' }}>
//         <CloseBtn onClick={onClose}>
//           <Close />
//         </CloseBtn>

//         <Title>Log out</Title>
//         <Text>Do you really want to leave?</Text>
//       </div>
//       <ButtonWrapper>
//         <LogoutButton $background={'#EF5050'} color={'#fff'} onClick={logOut}>
//           Log out
//         </LogoutButton>
//         <LogoutButton
//           $background={'#D7E3FF'}
//           color={'#407BFF'}
//           onClick={onClose}
//         >
//           Cancel
//         </LogoutButton>
//       </ButtonWrapper>
//     </Modal>,
//     // </Overlay>,
//     modalRoot
//   );
// };

// export default LogoutModal;
