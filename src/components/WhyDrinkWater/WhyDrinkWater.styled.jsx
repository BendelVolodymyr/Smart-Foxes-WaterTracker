import styled from 'styled-components';

export const Blok = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  gap: 12px;
  width: 280px;
  border-radius: 10px;
  background: ${(p) => p.theme.colors.secondary.color1};
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
  @media only screen and (min-width: ${(p) => p.theme.screens.tab}) {
    width: 494px;
    padding: 32px 24px;
  }
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
`;

export const BlokListItems = styled.li`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const BlokListItemsText = styled.div`
  width: 232px;
  color: ${(p) => p.theme.colors.primary.text};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(p) => p.theme.fontWeights.regular};
  line-height: 125%;
  @media only screen and (min-width: ${(p) => p.theme.screens.tab}) {
    width: 430px;
  }
`;
