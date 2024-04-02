import { useEffect, useRef } from 'react';
import { AvatarsUploader } from '../AvatarsUploader/AvatarsUploader';
import {
  StyledContainer,
  StyledHeader,
  StyledTitle,
  StyledCloseButton,
} from './settings.styled';
import UserInfoForm from '../UserInfo/userInfoForm';
import { Close } from '@mui/icons-material';

export const Setting = ({ onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscapeKey = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleCloseModal = event => {
      if (!modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleCloseModal);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  return (
    <StyledContainer ref={modalRef}>
      <StyledHeader>
        <StyledTitle></StyledTitle>
        <StyledCloseButton onClick={onClose}>
          <Close />
        </StyledCloseButton>
      </StyledHeader>
      <AvatarsUploader />
      <UserInfoForm />
    </StyledContainer>
  );
};
