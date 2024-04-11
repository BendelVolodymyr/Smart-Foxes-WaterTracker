import styled from 'styled-components';

import bgTab from '../../assets/imageSingPg/webp/backgroundHomeTab.webp';
import bgTab2x from '../../assets/imageSingPg/webp/backgroundHomeTab@2x.webp';

export const Container = styled.div`
  padding: 20px;
  background-image: image-set(url(${bgTab}) 1x, url(${bgTab2x}) 2x);
  background-position: bottom;
  background-size: 50vw auto;
  background-repeat: no-repeat;
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
  text-align: center;
  margin: 0;
  color: #407bff;
  word-break: break-all;
  word-break: break-all;
  font-weight: 500;
  line-height: 1.33;
  @media (min-width: 320px) and (max-width: 374px) {
    font-size: 13px;
  }
  @media (min-width: ${(p) => p.theme.screens.mob}) {
    font-size: 14px;
  }
  @media (min-width: ${(p) => p.theme.screens.tab}) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: block;
  border-radius: 10px;
  padding: 8px 30px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  background: ${(p) => p.theme.colors.primary.accent};
  color: #ffff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  width: 100%;
  cursor: pointer;
  transition: transform 150ms ease-in-out;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
`;

export const MOdalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-image: image-set(url(${bgTab}) 1x, url(${bgTab2x}) 2x);
  background-position: center;
  background-size: 40vw auto;
  background-repeat: no-repeat;
`;
