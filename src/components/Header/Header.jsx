import { Link } from 'react-router-dom';
import { Container, HeaderWrapper } from './Header.styled';
import Logo from './Logo/Logo';
import UserAuth from './UserAuth/UserAuth';
import useAuth from '../../hooks/useAuth';
import UserLogo from './UserLogo/UserLogo';
// import testAvatar from '../../assets/header-icons/avatar-test.jpg';

// import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
// import { Link } from 'react-router-dom';
// import UserAuth from './UserAuth/UserAuth';
// import UserLogo from './UserLogo/UserLogo';

const Header = () => {
  const { isLoggedIn, user } = useAuth();

  const avatarUrl = user.avatarUrl !== undefined ? user.avatarUrl : null;

  return (
    <header>
      <Container>
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          {isLoggedIn ? <UserLogo avatarUrl={avatarUrl} /> : <UserAuth />}
        </HeaderWrapper>
      </Container>
    </header>
  );
};

export default Header;
