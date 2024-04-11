import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  align-items: flex-start;
  @media only screen and (min-width: ${(p) => p.theme.screens.tab}) {
    width: 704px;
  }
  @media screen and (min-width: ${(p) => p.theme.screens.desk}) {
    width: 439px;
  }
`;

export const Title = styled.div`
  width: 246px;
  color: ${(p) => p.theme.colors.primary.text};
  font-family: Roboto;
  font-size: 28px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.bolt};
  line-height: 114.286%;
  margin-bottom: 16px;
  @media only screen and (min-width: ${(p) => p.theme.screens.tab}) {
    width: 439px;
    font-size: 36px;
    line-height: 116.667%;
  }
`;

export const Subtitle = styled.div`
  width: 197px;
  color: ${(p) => p.theme.colors.primary.text};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.regular};
  line-height: 125%;
  margin-bottom: 24px;
  @media only screen and (min-width: ${(p) => p.theme.screens.tab}) {
    width: 404px;
    font-size: 26px;
    line-height: 123.077%;
  }
  @media screen and (min-width: ${(p) => p.theme.screens.desk}) {
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
  color: ${(p) => p.theme.colors.primary.text};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 111.111%;
`;

export const BlokList = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  @media only screen and (min-width: ${(p) => p.theme.screens.tab}) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  @media screen and (min-width: ${(p) => p.theme.screens.desk}) {
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
  @media only screen and (min-width: ${(p) => p.theme.screens.tab}) {
    width: 224px;
  }
  @media screen and (min-width: ${(p) => p.theme.screens.desk}) {
    width: 248px;
  }
`;

export const BlokListItemsContainer = styled.div`
  width: 32px;
  height: 32px;
  @media only screen and (min-width: ${(p) => p.theme.screens.tab}) {
    width: 40px;
    height: 40px;
  }
`;

export const BlokListItemsText = styled.div`
  color: ${(p) => p.theme.colors.primary.text};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.regular};
  line-height: 125%;
`;

export const Button = styled.button`
  width: 280px;
  padding: 8px 30px;
  border-radius: 10px;
  background: ${(p) => p.theme.colors.primary.accent};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.colors.primary.bg};
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 125%;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
  @media only screen and (min-width: ${(p) => p.theme.screens.tab}) {
    width: 336px;
    padding: 10px 30px;
    font-size: 18px;
    line-height: 133.333%;
  }
  @media screen and (min-width: ${(p) => p.theme.screens.desk}) {
    width: 384px;
  }
`;
