import styled, { keyframes } from 'styled-components';

const colors = keyframes`
  0% {
    background: linear-gradient(#3f006c, #750050, #b10042, #da4837, #f7bb38);
  }

  100% {
    background: linear-gradient(#14045f, #331a99,  #282bce, #1555ec, #1e84f7);
  }
`;

const spin = keyframes`
  10% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(180deg);
  }
`;

const twinkle = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.7;
  }
`;

const float = keyframes`
  50% {
    transform: translateY(1px);
  }
`;

export const Container = styled.div`
  width: 280px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 112px;
  }
`;

export const HeaderWrapper = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeWrapper = styled.div`
  position: relative;
  width: 16px;
  height: 30px;
  display: flex;
  justify-content: ${props => (props.$isActive ? 'end' : 'start')};
  align-items: center;
  background: linear-gradient(#3f006c, #750050, #b10042, #da4837, #f7bb38);
  transform: translate(-50%, -50%);
  border-radius: 8px;
  animation: ${colors} 12s infinite forwards;

  @media screen and (min-width: ${p => p.theme.screens.tab}) {
    width: 56px;
    height: 28px;
    border-radius: 20px;
  }
`;

export const Glow = styled.div`
  position: absolute;
  top: 25px;
  left: 5px;
  height: 10px;
  width: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: ${float} 5s infinite;

  &::before,
  &::after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    background-color: inherit;
    border-radius: 50%;
  }

  &:before {
    top: -1px;
    left: -8px;
  }

  &:after {
    top: -1px;
    left: 4px;
  }
`;

export const Stars = styled.div`
  position: absolute;
  top: 3px;
  left: 8px;
  height: 0.5px;
  width: 0.5px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow:
    6px 15px #fff,
    -3px 18px #fff,
    -5px 10px #fff,
    4px 7px #fff;
  animation: ${twinkle} 12s infinite forwards;
`;

export const SpinnerThemeWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: -8px;
  animation: ${spin} 1s infinite forwards;
`;

export const Sun = styled.div`
  position: absolute;
  top: -4px;
  left: 12px;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #f7f7de;

  &::after,
  &::before {
    position: absolute;
    content: '';
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  &:before {
    height: 11px;
    width: 11px;
    top: -1.5px;
    left: -1.5px;
  }

  &:after {
    height: 14px;
    width: 14px;
    top: -3px;
    left: -3px;
  }
`;

export const Moon = styled.div`
  position: absolute;
  bottom: -7px;
  left: 8px;
  height: 8px;
  width: 8px;
  box-shadow: 3px -2px 0 0 #f7f7de;
  border-radius: 50%;

  &::after,
  &::before {
    position: absolute;
    content: '';
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  &:before {
    height: 11px;
    width: 11px;
    top: -3.5px;
    left: 2px;
  }

  &:after {
    height: 14px;
    width: 14px;
    top: -5px;
    left: 0.5px;
  }
`;

export const RayOne = styled.div`
  position: absolute;
  top: -4px;
  left: -1px;
  transform: rotate(130deg);
  height: 0;
  width: 1px;
  border-bottom: 10px solid rgba(255, 255, 255, 0.1);
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
`;

export const RayTwo = styled.div`
  position: absolute;
  top: -5px;
  left: 6px;
  transform: rotate(220deg);
  height: 0;
  width: 1px;
  border-bottom: 10px solid rgba(255, 255, 255, 0.1);
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
`;

export const RayThree = styled.div`
  position: absolute;
  top: 3px;
  left: -1px;
  transform: rotate(40deg);
  height: 0;
  width: 1px;
  border-bottom: 10px solid rgba(255, 255, 255, 0.1);
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
`;

export const RayFour = styled.div`
  position: absolute;
  top: 3px;
  left: 6px;
  transform: rotate(320deg);
  height: 0;
  width: 1px;
  border-bottom: 10px solid rgba(255, 255, 255, 0.1);
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
`;
