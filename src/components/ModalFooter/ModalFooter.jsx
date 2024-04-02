import { useContext, useEffect } from 'react';
import { ModalContext } from '../../context';

import { BackdropWrapper, IconClose, ModalWrapper } from './ModalFooter.styled';

export const ModalFooter = ({ children, inWidth, inHeight }) => {
  const { closeModal } = useContext(ModalContext);

  useEffect(() => {
    const handleEscapeKey = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [closeModal]);

  const handleClick = e => {
    if (e.target.id === 'close') {
      closeModal();
    }
  };

  return (
    <BackdropWrapper id="close" onClick={handleClick}>
      <ModalWrapper $isWidth={inWidth} $isHeight={inHeight}>
        <IconClose id="close" onClick={handleClick} />
        {children}
      </ModalWrapper>
    </BackdropWrapper>
  );
};
