import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import bgTab from '../image/backgroundTab.png';

export const Container = styled.div`
  padding: 20px;
  background-image: url(${bgTab});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 320px) and (max-width: 374px) {
    background-position: 37px -168px;
  }
  @media (min-width: ${(p) => p.theme.screens.mob}) {
    background-position: -3px -195px;
  }
  @media (min-width: ${(p) => p.theme.screens.tab}) {
    background-position: 52px -50px;
  }
  @media (min-width: ${(p) => p.theme.screens.desk}) {
    background-position: 56px -210px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin: 0;
  color: ${(p) => p.theme.colors.primary.text};
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  @media (min-width: 320px) and (max-width: 374px) {
    font-size: 18px;
    font-weight: 500;
  }
  @media (min-width: ${(p) => p.theme.screens.mob}) {
    font-size: 18px;
  }
  @media (min-width: ${(p) => p.theme.screens.tab}) {
    font-size: 26px;
  }
`;

export const Span = styled.span`
  display: block;
  text-align: center;
  margin: 0;
  color: #407bff;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  @media (min-width: 320px) and (max-width: 374px) {
    font-size: 16px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  border-radius: 10px;
  padding: 8px 30px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  background: #407bff;
  color: #ffff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  width: 100%;
  transition: box-shadow 150ms ease-in-out;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
`;

export const MOdalContainer = styled.div`
  padding: 10px;
  gap: 16px;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${bgTab});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 320px) and (max-width: 374px) {
    background-position: 19px -86px;
  }
  @media (min-width: ${(p) => p.theme.screens.mob}) {
    background-position: 12px -79px;
  }
  @media (min-width: ${(p) => p.theme.screens.tab}) {
    background-position: 22px -114px;
  }
  @media (min-width: ${(p) => p.theme.screens.desk}) {
    background-position: 15px -240px;
  }
`;
