import styled from 'styled-components';

export const StyledContainer = styled.div`
  color: #2f2f2f;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  border-radius: 10px;
  background: #fff;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  box-shadow:
    0px 4px 8px rgba(0, 0, 0, 0.1),
    0px 8px 16px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    width: 80%;
  }

  @media screen and (min-width: 1440px) {
    width: 1000px;
  }
`;
export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledTitle = styled.h2`
  margin: 0;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.23em;
  margin: 0;
`;

export const StyledCloseButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`;
