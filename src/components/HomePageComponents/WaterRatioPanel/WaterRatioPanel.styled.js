import styled from 'styled-components';
import { CiCirclePlus } from 'react-icons/ci';

const WaterRatio = styled.input`
  // background: ${(p) => p.theme.colors.secondary.color5};
  // -webkit-appearance: none;
  // appearance: none;
  // border-radius: 10px;
  width: 256px;
  margin-left: 11px;
  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    width: 325px;
  }
  @media (min-width: ${({ theme }) => theme.screens.desk}) {
    width: 360px;
  }
`;

const WaterRatioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    flex-direction: row;
    gap: 12px;
  }
  @media (min-width: ${({ theme }) => theme.screens.desk}) {
    gap: 23px;
    width: 600px;
    margin-left: 70px;
  }
`;
const WaterPanelContainer = styled.div`
  height: 100%;
  position: relative;
  width: 280px;
  display: flex;
  height: 82px;
  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    width: 356px;
  }
  @media (min-width: ${({ theme }) => theme.screens.desk}) {
    width: 391px;
  }
`;
const WaterRatioSpan = styled.span`
  font-size: 18px;
  position: absolute;
  top: 0;
  left: 0;
  font-weight: ${(p) => p.theme.fontWeights.regular};
  line-height: 24px;
  color: ${(p) => p.theme.colors.primary.accent};
`;

const PlusSvg = styled(CiCirclePlus)`
  fill: ${(p) => p.theme.colors.primary.bg};
  stroke: ${(p) => p.theme.colors.primary.bg};
  width: 16px;
  height: 16px;

  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`;
const AddWaterBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  width: 280px;
  justify-content: center;
  color: ${(p) => p.theme.colors.primary.bg};
  background-color: ${(p) => p.theme.colors.primary.accent};
  border: 1px;
  border-radius: 10px;
  padding: 10px 30px;
  border-r &:hover {
    color: ${(p) => p.theme.colors.secondary.color4};
    ${PlusSvg} {
      fill: ${(p) => p.theme.colors.secondary.color4};
      stroke: ${(p) => p.theme.colors.secondary.color4};
    }
  }

  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    line-height: 24px;
    width: 336px;
    font-size: 18px;
  }
  @media (min-width: ${({ theme }) => theme.screens.desk}) {
    width: 178px;
  }
`;
export {
  WaterRatio,
  WaterPanelContainer,
  WaterRatioSpan,
  PlusSvg,
  WaterRatioContainer,
  AddWaterBtn,
};
