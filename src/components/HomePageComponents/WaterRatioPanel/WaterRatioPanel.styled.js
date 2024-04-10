import styled from 'styled-components';
import { CiCirclePlus } from 'react-icons/ci';

const WaterRatio = styled.input`
  &[type='range'] {
    appearance: none;
    height: 8px;
    width: 100%;
    border-radius: 10px;
    background-color: ${(p) => p.theme.colors.secondary.color5};
    background-image: linear-gradient(
      ${(p) => p.theme.colors.secondary.color3},
      ${(p) => p.theme.colors.secondary.color3}
    );
    background-repeat: no-repeat;
  }

  &[type='range']:focus {
    outline: none;
  }

  &[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    animation: 0.2s;
    border-radius: 10px;
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    // background: ${(p) => p.theme.colors.secondary.color3};
  }

  &[type='range']::-webkit-slider-thumb {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: ${(p) => p.theme.colors.primary.bg};
    border: solid 1px ${(p) => p.theme.colors.primary.accent};
    -webkit-appearance: none;
    margin-top: -4px;
  }
`;
// заполненое${(p) => p.theme.colors.secondary.color3}
//не заполненое color5
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

    justify-content: flex-start;
  }
`;
const WaterPanelContainer = styled.div`
  height: 100%;
  position: relative;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 7px;
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
  color: ${(p) => p.theme.colors.primary.text};
  background-color: rgba(64, 123, 255, 0.3);
  border: 1px;
  border-radius: 10px;
  z-index: 1;
  padding: 10px 30px;
  position: relative;
  ${PlusSvg} {
    fill: ${(p) => p.theme.colors.primary.text};
    stroke: ${(p) => p.theme.colors.primary.accent};
  }

  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    line-height: 24px;
    width: 336px;
    font-size: 18px;
  }
  @media (min-width: ${({ theme }) => theme.screens.desk}) {
    width: 178px;
  }
  &:hover::before {
    height: 100%;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 0;
    background: ${(p) => p.theme.colors.primary.accent};
    z-index: -1;

    transition: 0.8s;
  }
  &:before {
    bottom: 0;
    border-radius: 10px;
  }
`;

const MarksContainer = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const LeftMark = styled.span`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(p) => p.theme.colors.primary.accent};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: ${(p) => p.theme.colors.secondary.color5};
  }
`;
const RightMark = styled.span`
  transform: translateX(45%);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(p) => p.theme.colors.primary.accent};

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${(p) => p.theme.colors.secondary.color5};
  }
`;
const Mark = styled.span`
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  margin-bottom: 4px;
  gap: 4px;
  color: ${(p) => p.theme.colors.primary.accent};

  &::before {
    content: '|';
    justify-content: center;
    align-items: center;
    color: ${(p) => p.theme.colors.secondary.color5};
  }
`;

//${(p) => p.theme.colors.primary.accent}back
export {
  WaterRatio,
  WaterPanelContainer,
  WaterRatioSpan,
  PlusSvg,
  WaterRatioContainer,
  AddWaterBtn,
  MarksContainer,
  LeftMark,
  RightMark,
  Mark,
};
