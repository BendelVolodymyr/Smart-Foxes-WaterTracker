import styled, { keyframes } from 'styled-components';
import { IoMdClose } from 'react-icons';

const showBackdrop = keyframes`
0% {
  opacity: 0;
}

100% {
opacity: 1;
}`;

// const hiddenBackdrop = keyframes`
// 0% {
//   opacity: 1;
//   transform: translateY(0);
// }

// 100% {
//   opacity: 0;
// transform: translateY(200px);
// `;

const showModal = keyframes`
0% {
  opacity: 0;
  transform: translateY(-200px);
}

100% {
  opacity: 1;
transform: translateY(0px);
`;

// const hiddenModal = keyframes`0% {
//   opacity: 1;
//   transform: translateY(0px);
// }

// 100% {
//   opacity: 0;
// transform: translateY(200px);`;

export const BackdropWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);

  animation: ${showBackdrop} 0.5s ease-out;
`;

export const ModalWrapper = styled.div`
  position: relative;
  overflow: auto;
  width: ${p => (p.$isWidth ? p.$isWidth : '280px')};
  height: ${p => (p.$isHeight ? p.$isHeight : '80%')};
  padding: 20px;

  background-color: ${(p) => p.theme.colors.primary.bg};

  border-radius: 10px;

  animation: ${showModal} 0.5s ease-out;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2e9aff;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Колір скролу при наведенні */
  }

  @media (min-width: ${(p) => p.theme.screens.tab}) {
    width: 720px;
  }
`;

export const IconClose = styled(IoMdClose)`
  position: absolute;
  top: 20px;
  right: 20px;

  transition:
    transform 0.3s ease-in-out,
    color 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: ${(p) => p.theme.colors.secondary.color4};
  }
`;
