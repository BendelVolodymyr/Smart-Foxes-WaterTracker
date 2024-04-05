import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  /* padding: 0 20px; */

  /* outline: auto; */
  margin: 0 auto;

  /* @media screen and (min-width: 375px) {
    max-width: 280px;
  } */

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
  width: 30px;
  height: 15px;
  display: flex;
  justify-content: ${props => (props.$isActive ? 'end' : 'start')};
  align-item: center;

  border-radius: 8px;
  background-color: grey;

  @media screen and (min-width: ${p => p.theme.screens.tab}) {
    width: 56px;
    height: 28px;
    border-radius: 20px;
  }
`;

export const ThemeButton = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 8px;
  background-color: blue;

  @media screen and (min-width: ${p => p.theme.screens.tab}) {
    width: 28px;
    height: 28px;
    border-radius: 14px;
  }
`;
