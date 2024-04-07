import { Link } from 'react-router-dom';
import {
  Container,
  Glow,
  HeaderWrapper,
  MainHeader,
  Moon,
  RayFour,
  RayOne,
  RayThree,
  RayTwo,
  SpinnerThemeWrapper,
  Stars,
  Sun,
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
    <MainHeader>
      <Container>
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <ThemeWrapper
            onClick={handleClickTheme}
            $isActive={buttonActive}
            $themeEnabled={buttonActive}
          >
            <Glow />
            <Stars />
            <SpinnerThemeWrapper>
              <Sun>
                <RayOne />
                <RayTwo />
                <RayThree />
                <RayFour />
              </Sun>
              <Moon></Moon>
            </SpinnerThemeWrapper>
          </ThemeWrapper>
          {isLoggedIn ? <UserLogo avatarUrl={user.avatar} /> : <UserAuth />}
        </HeaderWrapper>
      </Container>
    </MainHeader>
  );
};

export default Header;
