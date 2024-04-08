import { useRef, useState } from 'react';

import { ReactComponent as DownArrow } from '../../../assets/header-icons/down-arrow.svg';
import { UserLogoWrapper, UserName, AvatarBox, Button, Span } from './UserLogo.styled';
import UserLogoModal from '../UserLogoModal/UserLogoModal';
import formatEmail from '../../../helpers/formatEmail';
import getFirstLetter from '../../../helpers/getFirstLetter';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import useAuth from '../../../hooks/useAuth';
// import UserLogoModal from '../UserAuth/UserLogoModal/UserLogoModal';

const UserLogo = ({ avatarUrl }) => {
  const menuRef = useRef();
  const [isExpanded, setIsExpanded] = useState(false);

  const { user } = useAuth();

  // console.log(user);

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
            <img src={avatarUrl} alt="uer-avatar" />
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
