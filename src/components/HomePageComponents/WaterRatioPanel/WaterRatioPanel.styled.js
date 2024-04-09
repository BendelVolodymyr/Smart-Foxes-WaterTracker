import styled from 'styled-components';
import { CiCirclePlus } from "react-icons/ci";

const WaterRatio = styled.input`
  width: 280px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;
const WaterRatioContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  line-height: 1.25;
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
    font-size: 18px;
    line-height: 1.33;
  }
`;
export { WaterRatio, PlusSvg, WaterRatioContainer, AddWaterBtn };
