import { Link } from 'react-router-dom';
import { Text, UserAuthWrapper } from './UserAuth.styled';
import { ReactComponent as UnAuthUser } from '../../../assets/header-icons/UnAuthUser-Logo.svg';

const UserAuth = () => {
  return (
    <UserAuthWrapper>
      <Link to="/signin">
        <Text> Sigh In</Text>
      </Link>
      {/* <img className={css.user_avatar} src="#" alt="user_avatar" /> */}
      <UnAuthUser />
    </UserAuthWrapper>
  );
};

export default UserAuth;
