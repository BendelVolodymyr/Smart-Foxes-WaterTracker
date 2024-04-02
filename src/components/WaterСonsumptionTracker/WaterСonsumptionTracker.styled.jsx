import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  align-items: flex-start;
  @media only screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    width: 439px;
  }
`;

export const Title = styled.h1`
  width: 246px;
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 114.286%;
  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    width: 439px;
    font-size: 36px;
    line-height: 116.667%;
  }
`;

export const Subtitle = styled.p`
  width: 197px;
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  margin-bottom: 24px;
  @media only screen and (min-width: 768px) {
    width: 404px;
    font-size: 26px;
    line-height: 123.077%;
  }
  @media screen and (min-width: 1440px) {
    width: 439px;
  }
`;

export const Blok = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const BlokTitle = styled.div`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 111.111%;
`;

export const BlokList = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    width: 439px;
    flex-direction: column;
    align-items: start;
  }
`;

export const BlokListItems = styled.li`
  width: 216px;
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  @media only screen and (min-width: 768px) {
    width: 224px;
  }
  @media screen and (min-width: 1440px) {
    width: 248px;
  }
`;

export const BlokListItemsContainer = styled.div`
  width: 32px;
  height: 32px;
  @media only screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const BlokListItemsText = styled.div`
  color: #2f2f2f;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
`;

export const Button = styled.button`
  width: 280px;
  padding: 8px 30px;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
  @media only screen and (min-width: 768px) {
    width: 336px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 133.333%;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
  }
`;
