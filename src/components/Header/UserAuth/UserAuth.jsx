import { Link } from 'react-router-dom';
import { Text, UserAuthWrapper, UserIcon, UserIconWrapper } from './UserAuth.styled';

const UserAuth = () => {
  return (
    <UserAuthWrapper>
      <Link to="/signin">
        <Text> Sign in</Text>
      </Link>

      <UserIconWrapper>
        <UserIcon />
      </UserIconWrapper>
    </UserAuthWrapper>
  );
};

export default UserAuth;
