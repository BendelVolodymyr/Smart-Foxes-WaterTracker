import { useRef, useState } from 'react';

import { ReactComponent as DownArrow } from '../../../assets/header-icons/down-arrow.svg';
import {
  UserLogoWrapper,
  UserName,
  AvatarBox,
  Button,
} from './UserLogo.styled';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import formatEmail from '../../../helpers/formatEmail';
import getFirstLetter from '../../../helpers/getFirstLetter';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
// import UserLogoModal from '../UserAuth/UserLogoModal/UserLogoModal';

const UserLogo = ({ avatarUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuRef = useRef();

  const userEmail = 's.georgiymail@gmail.com';
  const firstNameLetter = getFirstLetter('');
  const firstEmailLetter = getFirstLetter(userEmail);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const onCloseLogomodal = () => {
    console.log('CLOSE USER MODAL');
    setIsExpanded(false);
  };

  const handleClickAway = () => {
    setIsExpanded(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <UserLogoWrapper ref={menuRef}>
        <UserName>{formatEmail(userEmail)}</UserName>
        <AvatarBox>
          {avatarUrl ? (
            <img src={avatarUrl} alt="uer-avatar" />
          ) : (
            firstNameLetter || firstEmailLetter
          )}
        </AvatarBox>
        <Button onClick={handleToggleExpand}>
          <DownArrow />
        </Button>
        {isExpanded && <UserLogoModal onCloseLogomodal={onCloseLogomodal} />}
      </UserLogoWrapper>
    </ClickAwayListener>
  );
};

export default UserLogo;
