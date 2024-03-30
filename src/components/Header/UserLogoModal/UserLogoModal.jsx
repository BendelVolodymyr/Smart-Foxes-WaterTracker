import { useDispatch } from 'react-redux';
import { Button, Modal } from './UserLogoModal.styled';
import { logout } from '../../../redux/auth/operations';
import { ReactComponent as LogOutIcon } from '../../../assets/header-icons/logout-icon.svg';
import { ReactComponent as SettingIcon } from '../../../assets/header-icons/setting-icon.svg';

import { setModal, setContetnt } from '../../../redux/modal/modalSlice';
import useModal from '../../../hooks/useModal';
const UserLogoModal = () => {
  const dispatch = useDispatch();
  const { isOpen } = useModal();

  const openSettingModal = () => {
    dispatch(setModal(!isOpen));
    dispatch(setContetnt('settingModal'));
  };

  const onClickHandler = () => {
    // console.log('Logout');

    dispatch(logout()); //logout
  };

  return (
    <Modal>
      <Button onClick={openSettingModal}>
        <SettingIcon />
        Setting
      </Button>

      <Button onClick={onClickHandler}>
        <LogOutIcon />
        Log Out
      </Button>
    </Modal>
  );
};

export default UserLogoModal;
