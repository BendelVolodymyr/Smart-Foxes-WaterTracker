import styled, { keyframes } from 'styled-components';
import { ReactComponent as HeartSvg } from '../../assets/svg/heart.svg';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';

const pulseAnimation = keyframes`
0% {
    transform: scale(1);
}
75% {
    transform: scale(1.3);
}
100% {
    transform: scale(1);
}`;

export const AnimationSvg = styled(HeartSvg)`
  width: 16px;
  height: 16px;
  animation: ${pulseAnimation} 2s infinite;
  animation-duration: 1s;
`;

export const FooterWrapper = styled.footer`
  height: 40px;
  width: 100%;

  display: flex;
  direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background-color: ${p => p.theme.colors.primary.bg};
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.primary.text};
`;

export const ButtonTeam = styled.button`
  color: ${p => p.theme.colors.primary.text};

  cursor: pointer;
`;

export const GlobalWrapperTeam = styled.div`
  width: 156px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 100%;
    padding: 0 12px;
  }
`;

export const TitleModal = styled.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  color: ${p => p.theme.colors.primary.text};
`;

export const TextPositionModal = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: ${p => p.theme.colors.primary.text};
  text-align: center;

  @media (min-width: ${p => p.theme.screens.tab}) {
    font-size: 14px;
  }
`;

export const TextGlobal = styled.h2`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  color: ${p => p.theme.colors.primary.text};
`;

export const UlWrapper = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    row-gap: 20px;
  }
`;

export const ListWrapper = styled.li`
  transition:
    transform 0.3s ease-in-out,
    border 0.3s ease-in-out;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 10px 10px -5px rgba(64, 123, 255, 1);
  }

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 156px;
  }
`;

export const ImageWrapper = styled.img`
  width: 100%;
  height: 232px;

  object-fit: cover;
  object-position: 50% 15%;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  @media (min-width: ${p => p.theme.screens.tab}) {
    height: 130px;
  }
`;

export const InfoTeamWrapper = styled.div`
  width: 100%;
  height: 107px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 156px;
    gap: 10px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const IconGitHub = styled(FaGithub)`
  width: 20px;
  height: 20px;

  transition:
    transform 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: ${p => p.theme.colors.primary.accent};
  }
`;

export const IconLinkedIn = styled(FaLinkedin)`
  width: 20px;
  height: 20px;

  transition:
    transform 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: ${p => p.theme.colors.primary.accent};
  }
`;

export const IconTelegram = styled(FaTelegram)`
  width: 20px;
  height: 20px;

  transition:
    transform 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: ${p => p.theme.colors.primary.accent};
  }
`;

export const TextTeamPosition = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  color: ${p => p.theme.colors.primary.text};
`;

export const IconLink = styled.a`
  color: ${p => p.theme.colors.primary.text};
  text-decoration: none;
`;
