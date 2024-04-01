import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 20px;
  @media only screen and (min-width: 768px) {
    gap: 60px;
    padding: 32px 40px;
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 81px;
    padding: 18px 49px;
    justify-content: center;
  }
`;
