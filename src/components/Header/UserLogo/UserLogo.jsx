import { useEffect, useRef, useState } from 'react';

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
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
      {isExpanded && <UserLogoModal />}
    </UserLogoWrapper>
  );
};

export default UserLogo;
