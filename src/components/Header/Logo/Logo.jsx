import { LogoWrapper, LogoText } from './Logo.styled';
import { ReactComponent as LogoImg } from '../../../assets/header-icons/header-logo.svg';

const Logo = () => {
  return (
    <>
      <LogoWrapper>
        <LogoImg />
        <LogoText>Tracker of water</LogoText>
      </LogoWrapper>
    </>
  );
};

export default Logo;
