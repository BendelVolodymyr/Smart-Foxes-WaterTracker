import { Button, Modal } from './UserLogoModal.styled';
import { useContext } from 'react';
import { ModalContext } from '../../../context';
import { ReactComponent as LogOutIcon } from '../../../assets/header-icons/logout-icon.svg';
import { ReactComponent as SettingIcon } from '../../../assets/header-icons/setting-icon.svg';
import { Setting } from '../../SettingModal/SettingsModal/SettingModal';
import LogoutModal from '../UserLogOutModal/UserLogOutModal';

const UserLogoModal = () => {
  const { openModal } = useContext(ModalContext);

  const handleOpenModal = modalContent => {
    openModal(<>{modalContent}</>);
  };

  return (
    <>
      <Modal>
        <Button
          onClick={() => {
            handleOpenModal(<Setting />, 'auto');
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
