import { Link } from 'react-router-dom';
import { Text, UserAuthWrapper, UserIcon, UserIconWrapper } from './UserAuth.styled';

const UserAuth = () => {
  return (
    <UserAuthWrapper>
      <Link to="/signin">
        <Text> Sigh In</Text>
      </Link>

      <UserIconWrapper>
        <UserIcon />
      </UserIconWrapper>
    </UserAuthWrapper>
  );
};

export default UserAuth;
