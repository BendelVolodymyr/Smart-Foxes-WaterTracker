import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ModalContext } from '../../context';

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

const Header = () => {
  const { toggleTheme } = useContext(ModalContext);
  const [themeShow, setThemeShow] = useState(JSON.parse(localStorage.getItem('theme')) || false);
  const { isLoggedIn, avatarURL } = useAuth();

  const handleClickTheme = () => {
    toggleTheme();
    setThemeShow(!themeShow);
  };

  return (
    <MainHeader>
      <Container>
        <HeaderWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <ThemeWrapper onClick={handleClickTheme} className={themeShow ? 'show' : ''}>
            <Glow />
            <Stars className={themeShow ? 'show' : ''} />
            <SpinnerThemeWrapper className={themeShow ? 'show' : ''}>
              <Sun>
                <RayOne />
                <RayTwo />
                <RayThree />
                <RayFour />
              </Sun>
              <Moon />
            </SpinnerThemeWrapper>
          </ThemeWrapper>
          {isLoggedIn ? <UserLogo avatarUrl={avatarURL} /> : <UserAuth />}
        </HeaderWrapper>
      </Container>
    </MainHeader>
  );
};

export default Header;
