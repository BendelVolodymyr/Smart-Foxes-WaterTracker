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
