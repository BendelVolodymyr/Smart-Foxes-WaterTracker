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

  return (
    <header>
      <Container>
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          {isLoggedIn ? <UserLogo avatarUrl={user.avatar} /> : <UserAuth />}
        </HeaderWrapper>

        {/* <div className="container">
        <div className={css.inner}>
          <Link to="/">
            <Logo />
          </Link>

          

        {/* <div className={css.user}>
            <Link to="/signin">
              <p style={{ color: 'black' }}> Sigh In</p>
            </Link>
            <img className={css.user_avatar} src="#" alt="user_avatar" />
          </div> */}
        {/* </div>
      </div> */}
      </Container>
    </header>
  );
};

export default Header;
