import styled from 'styled-components';
import { GoPlus } from 'react-icons/go';
import { HiMinus } from 'react-icons/hi2';
import { ListContext } from '../../HomeWaterPageComponents/TodayWaterList/TodayWaterList.styled';

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: center;
  width: 256px;
  color: ${(p) => p.theme.colors.primary.text};
  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    width: 656px;
  }
  @media (min-width: ${({ theme }) => theme.screens.desk}) {
    width: 544px;
  }
`;
const HeadModal = styled.h3`
  font-size: 26px;
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: 32px;
  width: 100%;
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
  width: 100%;

  
`;
const WaterAmountLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  flex-direction: column;
  width: 100%;
`;
const CalculateWater = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  width: 100%;
`;

const WaterAmountSpan = styled.span`
  font-size: 16px;
  font-weight: ${(p) => p.theme.fontWeights.regular};
  line-height: 20px;
`;
const RecordingTimeLabel = styled.label`
position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;
const RecordingTimeSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${(p) => p.theme.colors.primary.text};
`;
const RecordingTimeInput = styled.input`
display: flex;
justify-content: flex-start;
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${(p) => p.theme.colors.secondary.color5};
  outline: transparent;
  &:focus {
    border-color: ${(p) => p.theme.colors.primary.accent};
  }
`;
const WaterUsedLabel = styled.label`
position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`;
const WaterUsedSpan = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: ${(p) => p.theme.colors.primary.text};
`;
const WaterUsedInput = styled.input`
  padding: 12px 10px;
  border-radius: 6px;
  border: 1px solid ${(p) => p.theme.colors.secondary.color5};
  outline: transparent;
  &:focus {
    border-color: ${(p) => p.theme.colors.primary.accent};
  }
   
`;
const ContainerSaveResult = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    gap: 16px;
    flex-direction: row;
  }
  @media (min-width: ${({ theme }) => theme.screens.desk}) {
  }
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
  width: 100%;
  height: 44px;
  border-radius: 10px;
  padding: 10px 30px;
  background-color: ${(p) => p.theme.colors.primary.accent};
  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    width: 160px;
  }
 
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

  & :focus{
    outline: transparent;}

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
  & :focus{
    outline: transparent;
  }

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

const ErrorText = styled.span`
  position: absolute;
bottom:-22px;
left: 10px;
  color: red;
  font-size: 14px;
  line-height: 1.5;
  display: block;
  display: ${(props) => (props.hideonerror === "true" ? 'none' : 'block')};
`

const ModalPortionInfo = styled(ListContext)`
  display: flex;
  justify-content: flex-start;
  width: 254px;
  border-radius: 10px;
  background: ${p => p.theme.colors.secondary.color1};
  padding: 8px 24px;

  
`


const NoPortion = styled.p`

color:  ${(p) => p.theme.colors.primary.accent};
font-weight:400px;
`

export {
  HeadModal,
  ModalContainer,
  ChooseSpan,
  WaterInputed,
  PlusSvg,
  CalculateWater,
  ButtonToggle,
  WaterAmountLabel,
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
  ErrorText,
  ModalPortionInfo,
  NoPortion
};
