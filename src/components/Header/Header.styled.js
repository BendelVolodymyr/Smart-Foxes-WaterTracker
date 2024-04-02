import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  width: 100%;
  padding: 0 20px;

  /* outline: auto; */
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 112px;
  }
`;

export const HeaderWrapper = styled.div`
  padding-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
