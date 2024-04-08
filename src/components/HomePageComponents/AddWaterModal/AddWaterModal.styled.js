import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';
import { HiMinus } from 'react-icons/hi2';

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
`;
const HeadModal = styled.h3`
  font-size: 26px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 32px;
`;
const ChooseSpan = styled.span`
  font-size: 18px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 20px;
  margin-bottom: 16px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const WaterAmountLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-direction: column;
`;
const CalculateWater = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
`;
const WaterAmountInput = styled.input``;
const WaterAmountSpan = styled.span`
  font-size: 16px;
  font-weight: ${(p) => p.theme.fontWeights.regular};
  line-height: 20px;
`;
const RecordingTimeLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const RecordingTimeSpan = styled.span``;
const RecordingTimeInput = styled.input`
  width: 544px;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${(p) => p.theme.colors.secondary.color5};
`;
const WaterUsedLabel = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`;
const WaterUsedSpan = styled.span``;
const WaterUsedInput = styled.input`
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${(p) => p.theme.colors.secondary.color5};
  width: 544px;
`;
const ContainerSaveResult = styled.div`
  display: flex;
  width: 544px;
  align-items: center;
  justify-content: flex-end;
  gap: 24px;
`;
const WaterUsedValue = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: ${(p) => p.theme.fontWeights.bolt};
  line-height: 24px;
  padding: 6px 10px;
  width: 92px;
  border-radius: 40px;
  background-color: ${(p) => p.theme.colors.secondary.color5};
  color: ${(p) => p.theme.colors.primary.accent};
`;
const ButtonSave = styled.button`
  font-size: 18px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 24px;
  text-align: center;
  color: ${(p) => p.theme.colors.primary.bg};
  box-shadow: 0 4px 8px 0 ${(p) => p.theme.colors.primary.accent};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 6px 12px 0 ${(p) => p.theme.colors.secondary.accent};
  }
  display: block;
  width: 160px;
  height: 44px;
  border-radius: 10px;
  padding: 10px 30px;
  background-color: ${(p) => p.theme.colors.primary.accent};
`;
const ButtonToggle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 40px;
  height: 40px;

  border: 1px solid ${(p) => p.theme.colors.secondary.color3};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 2px 4px 0px ${(p) => p.theme.colors.primary.accent};
  }
`;

const PlusSvg = styled(GoPlus)`
  fill: ${(p) => p.theme.colors.primary.accent};
  stroke: ${(p) => p.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`;
const MinusSvg = styled(HiMinus)`
  fill: ${(p) => p.theme.colors.primary.accent};
  stroke: ${(p) => p.theme.colors.primary.accent};
  width: 16px;
  height: 16px;

  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`;
const WaterInputed = styled.span`
  font-size: 18px;
  font-weight: ${(p) => p.theme.fontWeights.bolt};
  line-height: 24px;
  text-align: center;
  color: ${(p) => p.theme.colors.primary.accent};

`;

export {
  HeadModal,
  ModalContainer,
  ChooseSpan,
  WaterInputed,
  PlusSvg,
  CalculateWater,
  ButtonToggle,
  WaterAmountLabel,
  WaterAmountInput,
  WaterAmountSpan,
  MinusSvg,
  RecordingTimeLabel,
  RecordingTimeInput,
  RecordingTimeSpan,
  WaterUsedLabel,
  WaterUsedSpan,
  WaterUsedInput,
  Container,
  ContainerSaveResult,
  WaterUsedValue,
  ButtonSave,
};
