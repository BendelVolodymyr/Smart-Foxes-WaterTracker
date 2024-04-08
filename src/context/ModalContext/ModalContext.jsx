import { createContext, useState } from 'react';
import { ModalFooter } from '../../components/ModalFooter/ModalFooter';
import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import { GlobalStyle } from '../../styles/globalStyle';
import useLocalStorage from '../../hooks/useLocalStorage';

const LOCAL_KEY_THEME = 'theme';

export const ModalContext = createContext({
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [modalShowing, setModalShowing] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [overflow, setOverflow] = useState(null);
  const [themeShow, setThemeShow] = useLocalStorage(LOCAL_KEY_THEME, false);

  const toggleTheme = () => {
    setThemeShow(!themeShow);
  };

  const openModal = (modalConfig, inOverflow) => {
    setModalContent(modalConfig.props);
    setOverflow(inOverflow);
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
      <ThemeProvider theme={themeShow ? theme.nightTheme : theme.lightTheme}>
        <GlobalStyle $isVisibility={modalShowing ? 'hidden' : 'scroll'} />
        {modalShowing && (
          <ModalFooter {...modalContent} inOverflow={overflow} />
        )}
        {children}
      </ThemeProvider>
    </ModalContext.Provider>
  );
};
