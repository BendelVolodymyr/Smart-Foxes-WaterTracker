import { Link } from 'react-router-dom';
import {
  Container,
  HeaderWrapper,
  ThemeButton,
  ThemeWrapper,
} from './Header.styled';
import Logo from './Logo/Logo';
import UserAuth from './UserAuth/UserAuth';
import useAuth from '../../hooks/useAuth';
import UserLogo from './UserLogo/UserLogo';
import { useContext, useState } from 'react';
import { ModalContext } from '../../context';
// import testAvatar from '../../assets/header-icons/avatar-test.jpg';

// import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
// import { Link } from 'react-router-dom';
// import UserAuth from './UserAuth/UserAuth';
// import UserLogo from './UserLogo/UserLogo';

const Header = () => {
  const [buttonActive, setButtonActive] = useState();

  const { isLoggedIn, user } = useAuth();
  const { toggleTheme } = useContext(ModalContext);

  const handleClickTheme = () => {
    setButtonActive(!buttonActive);
    toggleTheme();
  };

  return (
    <header>
      <Container>
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <ThemeWrapper $isActive={buttonActive}>
            <ThemeButton onClick={handleClickTheme}></ThemeButton>
          </ThemeWrapper>
          {isLoggedIn ? <UserLogo avatarUrl={user.avatar} /> : <UserAuth />}
        </HeaderWrapper>
      </Container>
    </header>
  );
};

export default Header;
