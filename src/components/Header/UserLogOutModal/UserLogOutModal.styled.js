import styled from 'styled-components';
// import theme from '../../../styles/theme';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

export const Modal = styled.div`
  position: absolute;
  width: 280px;
  height: 260px;

  padding: 32px 24px;
  gap: 24px;
  /* border-radius: 10px;
  background-color: white; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* z-index: 999; */

  @media screen and (min-width: 768px) {
    width: 592px;
    height: 208px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 0px;

  width: 24px;
  height: 24px;
`;

export const Title = styled.h4`
  font-family: Roboto;
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  margin-bottom: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: end;
  }
`;

export const LogoutButton = styled.button`
  width: 232px;
  height: 36px;
  padding: 8px 30px;
  gap: 10px;
  border-radius: 10px;

  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;

  background-color: ${(props) => props.$background};
  color: ${(props) => props.color};

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 44px;
  }
`;
