import { createContext, useState } from 'react';
import { ModalFooter } from '../../components/ModalFooter/ModalFooter';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';

export const ModalContext = createContext({
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [modalShowing, setModalShowing] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [themeShow, setThemeShow] = useState(true);
  const toggleTheme = () => {
    setThemeShow(!themeShow);
  };

  const openModal = (modalConfig, width, height) => {
    setModalContent(modalConfig.props);
    setWidth(width);
    setHeight(height);
    setModalShowing(true);
  };

  const closeModal = () => {
    setModalShowing(false);
  };

  const valueModalProvider = {
    openModal,
    closeModal,
    toggleTheme,
  };
  return (
    <ModalContext.Provider value={valueModalProvider}>
      <ThemeProvider theme={themeShow ? theme.lightTheme : theme.nightTheme}>
        {modalShowing && (
          <ModalFooter {...modalContent} inWidth={width} inHeight={height} />
        )}
        {children}
      </ThemeProvider>
    </ModalContext.Provider>
  );
};