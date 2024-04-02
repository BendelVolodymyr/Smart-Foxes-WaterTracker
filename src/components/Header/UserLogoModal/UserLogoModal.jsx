import { Button, Modal } from './UserLogoModal.styled';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../../../context';
import { ReactComponent as LogOutIcon } from '../../../assets/header-icons/logout-icon.svg';
import { ReactComponent as SettingIcon } from '../../../assets/header-icons/setting-icon.svg';
import { Setting } from '../../SettingModal/SettingsModal/SettingModal';
import LogoutModal from '../UserLogOutModal/UserLogOutModal';

const UserLogoModal = () => {
  const { openModal } = useContext(ModalContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpenModal = modalContent => {
    if (windowWidth >= 768) {
      openModal(<>{modalContent}</>, '592px', '208px');
    }

    if (windowWidth <= 767) {
      openModal(<>{modalContent}</>, '280px', '280px');
    }
  };

  return (
    <>
      <Modal>
        <Button
          onClick={() => {
            handleOpenModal(<Setting />);
          }}
        >
          <SettingIcon />
          Setting
        </Button>

        <Button onClick={() => handleOpenModal(<LogoutModal />)}>
          <LogOutIcon />
          Log Out
        </Button>
      </Modal>
    </>
  );
};

export default UserLogoModal;
