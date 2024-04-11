import { useRef, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { ReactComponent as DownArrow } from '../../../assets/header-icons/down-arrow.svg';
import getFirstLetter from '../../../helpers/getFirstLetter';

import { UserLogoWrapper, UserName, AvatarBox, Button, Span } from './UserLogo.styled';

import UserLogoModal from '../UserLogoModal/UserLogoModal';
import formatEmail from '../../../helpers/formatEmail';

const UserLogo = ({ avatarUrl }) => {
  const menuRef = useRef();
  const { user } = useAuth();
  const [isExpanded, setIsExpanded] = useState(false);

  const userEmail = user.email;
  const firstNameLetter = getFirstLetter('');
  const firstEmailLetter = getFirstLetter(userEmail);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const onCloseLogomodal = () => {
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
            <img
              src={avatarUrl}
              alt="uer-avatar"
              style={{ borderRadius: '50%', width: 28, height: 28 }}
            />
          ) : (
            <Span>{firstNameLetter || firstEmailLetter}</Span>
          )}
        </AvatarBox>
        <Button onClick={handleToggleExpand}>
          <DownArrow />
        </Button>
        {isExpanded && <UserLogoModal onclose={onCloseLogomodal} />}
      </UserLogoWrapper>
    </ClickAwayListener>
  );
};

export default UserLogo;
