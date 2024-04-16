import { useContext } from 'react';
import { ModalContext } from '../../context';

import {
  AnimationSvg,
  ButtonTeam,
  FooterWrapper,
  Text,
  ImageWrapper,
  InfoTeamWrapper,
  ListWrapper,
  TextPositionModal,
  TitleModal,
  UlWrapper,
  IconGitHub,
  IconLinkedIn,
  TextTeamPosition,
  IconsWrapper,
  IconLink,
  IconTelegram,
  TextGlobal,
  GlobalWrapperTeam,
} from './Footer.styled';

import Volodymyr from '../../assets/team/Volodymyr.jpg';
import Daria from '../../assets/team/Daria.jpg';
import Georgiy from '../../assets/team/Georgiy.jpg';
import Julia from '../../assets/team/Julia.jpg';
import Kiril from '../../assets/team/Kiril.jpg';
import Natalia from '../../assets/team/Natalia.jpg';
import Oksana from '../../assets/team/Oksana.jpg';
import Oleksiy from '../../assets/team/Oleksiy.jpg';
import Tania from '../../assets/team/Tania.jpg';
import Tymur from '../../assets/team/Tymur.jpg';

export const Footer = () => {
  const { openModal } = useContext(ModalContext);

  const handleClickButton = () => {
    openModal(
      <>
        <GlobalWrapperTeam>
          <TitleModal>Our Team</TitleModal>
          <TextGlobal>Frontend</TextGlobal>
          <UlWrapper>
            <ListWrapper>
              <ImageWrapper src={Volodymyr} alt="Volodymyr" />
              <InfoTeamWrapper>
                <TextPositionModal>Volodymyr Bendel</TextPositionModal>
                <TextTeamPosition>Team lead project</TextTeamPosition>
                <IconsWrapper>
                  <IconLink href="https://github.com/BendelVolodymyr">
                    <IconGitHub />
                  </IconLink>
                  <IconLink href="https://www.linkedin.com/in/volodymyr-bendel/">
                    <IconLinkedIn />
                  </IconLink>
                  <IconLink href="https://t.me/Volodymyr_Full_Stack">
                    <IconTelegram />
                  </IconLink>
                </IconsWrapper>
              </InfoTeamWrapper>
            </ListWrapper>
            <ListWrapper>
              <ImageWrapper src={Natalia} alt="Natalia" />
              <InfoTeamWrapper>
                <TextPositionModal>Nataliia Filina</TextPositionModal>
                <TextTeamPosition>Scrum Master</TextTeamPosition>
                <IconsWrapper>
                  <IconLink href="https://github.com/NataFilina">
                    <IconGitHub />
                  </IconLink>
                  <IconLink href="https://www.linkedin.com/in/nataliiafilina/">
                    <IconLinkedIn />
                  </IconLink>
                  <IconLink href="https://t.me/natalia_filina1">
                    <IconTelegram />
                  </IconLink>
                </IconsWrapper>
              </InfoTeamWrapper>
            </ListWrapper>
            <ListWrapper>
              <ImageWrapper src={Oksana} alt="Oksana" />
              <InfoTeamWrapper>
                <TextPositionModal>Oksana Lesjuk</TextPositionModal>
                <TextTeamPosition>Developer</TextTeamPosition>
                <IconsWrapper>
                  <IconLink href="https://github.com/OksanaLesjuk">
                    <IconGitHub />
                  </IconLink>
                  <IconLink href="https://www.linkedin.com/in/oksana-lesiuk">
                    <IconLinkedIn />
                  </IconLink>
                  <IconLink href="https://t.me/OksanaLesiuk">
                    <IconTelegram />
                  </IconLink>
                </IconsWrapper>
              </InfoTeamWrapper>
            </ListWrapper>
            <ListWrapper>
              <ImageWrapper src={Tania} alt="Tania" />
              <InfoTeamWrapper>
                <TextPositionModal>Tania Sibilova</TextPositionModal>
                <TextTeamPosition>Developer</TextTeamPosition>
                <IconsWrapper>
                  <IconLink href="https://github.com/Tania66">
                    <IconGitHub />
                  </IconLink>
                  <IconLink href="https://www.linkedin.com/in/tania-sibilova">
                    <IconLinkedIn />
                  </IconLink>
                  <IconLink href="https://t.me/v_e_n_i_n_i">
                    <IconTelegram />
                  </IconLink>
                </IconsWrapper>
              </InfoTeamWrapper>
            </ListWrapper>

            <ListWrapper>
              <ImageWrapper src={Kiril} alt="Kiril" />
              <InfoTeamWrapper>
                <TextPositionModal>Kyrylo Matkash</TextPositionModal>
                <TextTeamPosition>Developer</TextTeamPosition>
                <IconsWrapper>
                  <IconLink href="https://github.com/kyrylomatkash">
                    <IconGitHub />
                  </IconLink>
                  <IconLink href="https://www.linkedin.com/in/kyrylomatkash">
                    <IconLinkedIn />
                  </IconLink>
                  <IconLink href="https://t.me/kyrylomm">
                    <IconTelegram />
                  </IconLink>
                </IconsWrapper>
              </InfoTeamWrapper>
            </ListWrapper>
            <ListWrapper>
              <ImageWrapper src={Oleksiy} alt="Oleksiy" />
              <InfoTeamWrapper>
                <TextPositionModal>Oleksiy Zhmuida</TextPositionModal>
                <TextTeamPosition>Developer</TextTeamPosition>
                <IconsWrapper>
                  <IconLink href="https://github.com/irokez34">
                    <IconGitHub />
                  </IconLink>
                  <IconLink href="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D1%96%D0%B9-%D0%B6%D0%BC%D1%83%D0%B9%D0%B4%D0%B0-b34a48276/">
                    <IconLinkedIn />
                  </IconLink>
                  <IconLink href="https://t.me/paketKvAdrat">
                    <IconTelegram />
                  </IconLink>
                </IconsWrapper>
              </InfoTeamWrapper>
            </ListWrapper>
            <ListWrapper>
              <ImageWrapper src={Georgiy} alt="Georgiy" />
              <InfoTeamWrapper>
                <TextPositionModal>Georgiy Sergeev</TextPositionModal>
                <TextTeamPosition>Developer</TextTeamPosition>
                <IconsWrapper>
                  <IconLink href="https://github.com/GeorgiySergeev">
                    <IconGitHub />
                  </IconLink>
                  <IconLink href="https://www.linkedin.com/in/georgiy-sergeev/">
                    <IconLinkedIn />
                  </IconLink>
                  <IconLink href="https://t.me/Georgiy_Sergeev">
                    <IconTelegram />
                  </IconLink>
                </IconsWrapper>
              </InfoTeamWrapper>
            </ListWrapper>
          </UlWrapper>
          <TextGlobal>Backend</TextGlobal>
          <UlWrapper>
            <ListWrapper>
              <ImageWrapper src={Julia} alt="Julia" />
              <InfoTeamWrapper>
                <TextPositionModal>Yuliya Turasova</TextPositionModal>
                <TextTeamPosition>Developer</TextTeamPosition>
                <IconsWrapper>
                  <IconLink href="https://github.com/turasova">
                    <IconGitHub />
                  </IconLink>
                  <IconLink href="https://www.linkedin.com/in/yuliya-turasova/">
                    <IconLinkedIn />
                  </IconLink>
                  <IconLink href="https://t.me/turasova1986">
                    <IconTelegram />
                  </IconLink>
                </IconsWrapper>
              </InfoTeamWrapper>
            </ListWrapper>
            <ListWrapper>
              <ImageWrapper src={Tymur} alt="Tymur" />
              <InfoTeamWrapper>
                <TextPositionModal>Tymur Prysiazhniuk</TextPositionModal>
                <TextTeamPosition>Developer</TextTeamPosition>
                <IconsWrapper>
                  <IconLink href="https://github.com/AQR88">
                    <IconGitHub />
                  </IconLink>
                  <IconLink href="https://www.linkedin.com/in/tymur-prysiazhniuk/">
                    <IconLinkedIn />
                  </IconLink>
                  <IconLink href="https://t.me/AQR1988">
                    <IconTelegram />
                  </IconLink>
                </IconsWrapper>
              </InfoTeamWrapper>
            </ListWrapper>
            <ListWrapper>
              <ImageWrapper src={Daria} alt="Daria" />
              <InfoTeamWrapper>
                <TextPositionModal>Daria Korolenko</TextPositionModal>
                <TextTeamPosition>Developer</TextTeamPosition>
                <IconsWrapper>
                  <IconLink href="https://github.com/KorolenkoDaria">
                    <IconGitHub />
                  </IconLink>
                  <IconLink href="https://www.linkedin.com/in/dariakorolenko/">
                    <IconLinkedIn />
                  </IconLink>
                  <IconLink href="https://t.me/KorolenkoD">
                    <IconTelegram />
                  </IconLink>
                </IconsWrapper>
              </InfoTeamWrapper>
            </ListWrapper>
          </UlWrapper>
        </GlobalWrapperTeam>
      </>
    );
  };

  return (
    <>
      <FooterWrapper>
        <Text>&copy; 2024 | Developed with</Text>
        <AnimationSvg />
        <ButtonTeam onClick={handleClickButton}>by GoIT Students</ButtonTeam>
      </FooterWrapper>
    </>
  );
};
