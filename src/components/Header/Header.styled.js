import styled, { keyframes } from 'styled-components';

const float = keyframes`
50%{
  transform: translateY(2px);
}`;

export const MainHeader = styled.header`
  background: ${(p) => p.theme.colors.primary.bg};
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
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeWrapper = styled.div`
  position: fixed;
  bottom: 50px;
  left: 20px;
  width: 16px;
  height: 30px;
  display: flex;
  align-items: center;

  z-index: 100;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(31, 91, 240, 1) 0%,
    rgba(31, 141, 240, 0.768032212885154) 25%,
    rgba(240, 167, 31, 1) 75%,
    rgba(226, 96, 15, 0.017331932773109293) 100%
  );
  transition: background 1s ease-in-out;

  border-radius: 8px;

  &:hover {
    -webkit-box-shadow: 0px 0px 20px 3px rgba(158, 187, 255, 1);
    -moz-box-shadow: 0px 0px 20px 3px rgba(158, 187, 255, 1);
    box-shadow: 0px 0px 20px 3px rgba(158, 187, 255, 1);
  }

  &.show {
    background: linear-gradient(#14045f, #331a99, #282bce, #1555ec, #1e84f7);
  }

  @media screen and (min-width: ${(p) => p.theme.screens.tab}) {
    bottom: 70px;
    left: 40px;
    width: 20px;
    height: 40px;
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

  @media screen and (min-width: ${(p) => p.theme.screens.tab}) {
    top: 35px;
    left: 5px;
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
      top: -3px;
      left: -8px;
    }

    &:after {
      top: -3px;
      left: 8px;
    }
  }
`;

export const Stars = styled.div`
  position: absolute;
  top: 3px;
  left: 8px;
  height: 0.5px;
  width: 0.5px;
  background-color: #fff;

  opacity: 0;

  border-radius: 50%;
  box-shadow:
    6px 15px #fff,
    -3px 18px #fff,
    -5px 10px #fff,
    4px 7px #fff;

  &.show {
    opacity: 0.7;
    transition: opacity 5s ease;
  }

  @media screen and (min-width: ${(p) => p.theme.screens.tab}) {
    box-shadow:
      8px 14px #fff,
      -2px 19px #fff,
      -7px 12px #fff,
      5px 24px #fff;

    &.show {
      opacity: 0.6;
      transition: opacity 6s ease;
    }
  }
`;

export const SpinnerThemeWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: -8px;

  transition: transform 0.3s ease-in-out;

  &.show {
    transform: rotate(180deg);
  }

  @media screen and (min-width: ${(p) => p.theme.screens.tab}) {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    position: absolute;
    top: 12px;
    left: -13px;
  }
`;

export const Sun = styled.div`
  position: absolute;
  top: -4px;
  left: 12px;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #ffcc33;
  z-index: 1;

  &::after,
  &::before {
    position: absolute;
    content: '';
    background-color: rgba(255, 204, 51, 0.1);
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

  @media screen and (min-width: ${(p) => p.theme.screens.tab}) {
    top: -5px;
    left: 16px;
    height: 10px;
    width: 10px;

    &:before {
      height: 13px;
      width: 13px;
      top: -1.5px;
      left: -1.5px;
    }

    &:after {
      height: 16px;
      width: 16px;
      top: -3px;
      left: -3px;
    }
  }
`;

export const Moon = styled.div`
  position: absolute;
  bottom: -7px;
  left: 8px;
  height: 8px;
  width: 8px;
  box-shadow: 3px -2px 0 0 #f7f7de; //
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

  @media screen and (min-width: ${(p) => p.theme.screens.tab}) {
    bottom: -7px;
    left: 12px;
    height: 10px;
    width: 10px;

    &:before {
      height: 13px;
      width: 13px;
      top: -4px;
      left: 2px;
    }

    &:after {
      height: 16px;
      width: 16px;
      top: -5px;
      left: 1px;
    }
  }
`;

export const ThemeButton = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 8px;
  background-color: blue;

  overflow: hidden;

  @media screen and (min-width: ${(p) => p.theme.screens.tab}) {
    width: 28px;
    height: 28px;
    border-radius: 14px;
  }
`;

export const RayOne = styled.div`
  position: absolute;
  top: -4px;
  left: -1px;
  transform: rotate(130deg);

  height: 0;
  width: 1px;
  border-bottom: 10px solid rgba(255, 204, 51, 0.1);
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
  border-bottom: 10px solid rgba(255, 204, 51, 0.1);
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
  border-bottom: 10px solid rgba(255, 204, 51, 0.1);
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
  border-bottom: 10px solid rgba(255, 204, 51, 0.1);
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
`;
