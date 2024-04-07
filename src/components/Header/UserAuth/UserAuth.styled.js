import styled from 'styled-components';
import { ReactComponent as UnAuthUserSVG } from '../../../assets/header-icons/uer-avatar-icon.svg';

export const UserAuthWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledUnAuthUserSVG = styled(UnAuthUserSVG)`
  fill: aliceblue;
`;
export const UserIcon = StyledUnAuthUserSVG;

export const UserIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid ${(p) => p.theme.colors.primary.text};
`;

export const Text = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;

  color: ${(p) => p.theme.colors.primary.accent};

  @media screen and (min-width: 768px) {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
`;
