import { Button, Modal } from './UserLogoModal.styled';

import { ReactComponent as LogOutIcon } from '../../../assets/header-icons/logout-icon.svg';
import { ReactComponent as SettingIcon } from '../../../assets/header-icons/setting-icon.svg';
import { useState } from 'react';
import LogoutModal from '../UserLogOutModal/UserLogOutModal';
import SettingModal from '../../SettingModal/SettingModal';

const UserLogoModal = () => {
  const [settingIsOpen, setSettingIsOpen] = useState(false);

  const [logoutgIsOpen, setLogoutIsOpen] = useState(false);

  const openSettingModal = () => {
    setSettingIsOpen(true);
  };

  const toggleLogoutModal = () => {
    setLogoutIsOpen((prevLogoutIsOpen) => !prevLogoutIsOpen);
    // onCloseLogomodal();
  };

  return (
    <>
      <Modal>
        <Button onClick={openSettingModal}>
          <SettingIcon />
          Setting
        </Button>

        <Button onClick={toggleLogoutModal}>
          <LogOutIcon />
          Log Out
        </Button>
      </Modal>
      {logoutgIsOpen && <LogoutModal onClose={toggleLogoutModal} />}
      {settingIsOpen && <SettingModal />}
    </>
  );
};

export default UserLogoModal;
