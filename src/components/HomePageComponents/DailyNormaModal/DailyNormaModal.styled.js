import styled from 'styled-components';

const Modal = styled.div`
  width: 256px;
  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    width: 656px;
  }
  @media (min-width: ${({ theme }) => theme.screens.desk}) {
    width: 544px;
  }
`;
const Head = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  color: ${(p) => p.theme.colors.primary.text};
`;
const ContainerGender = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
  margin-bottom: 12px;
  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    flex-direction: row;
    gap: 24px;
  }
  @media (min-width: ${({ theme }) => theme.screens.desk}) {
    widht: 100%;
  }
`;
const GenderPargh = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${(p) => p.theme.colors.primary.text};
`;
const WaterAmountParagh = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${(p) => p.theme.colors.primary.text};
  width: 255px;
  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    width: 100%;
  }
  @media (min-width: ${({ theme }) => theme.screens.desk}) {
    width: 100%;
  }
`;
const GenderSpan = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  color: ${(p) => p.theme.colors.primary.accent};
`;
const InfoContainer = styled.div`
  width: 256px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 24px;
  border-color: ${(p) => p.theme.colors.secondary.color5};
  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    width: 100%;
  }
`;
const InfoPargh = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #8f8f8f;
`;
const InfoSpan = styled.span`
  color: ${(p) => p.theme.colors.primary.accent};
`;
const CalculateForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const CalculateHead = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: ${(p) => p.theme.colors.primary.text};
`;
const GenderLabel = styled.label`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
const GenderInput = styled.input`
  width: 14px;
  height: 14px;
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.primary.accent};
  color: ${(p) => p.theme.colors.primary.bg};
  border-radius: 50%;
`;
const GenderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
const UserLabel = styled.label`
  width: 100%;
  display: flex;
  gap: 8px;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    width: 100%;
  }
  @media (min-width: ${({ theme }) => theme.screens.desk}) {
    width: 100%;
  }
`;
const UserInputs = styled.input`
  border-radius: 6px;
  border: 1px solid;
  width: 100%;
  color: ${(p) => p.theme.colors.primary.accent};
  padding: 12px 10px 12px 10px;
  background: transparent;
  border-color: ${(p) => p.theme.colors.secondary.color5};
  &::placeholder {
    color: ${(p) => p.theme.colors.secondary.color5};
  }

  &:hover {
    color: ${(p) => p.theme.colors.primary.accent};
    border: 1px solid ${(p) => p.theme.colors.primary.accent};
  }

  &:focus {
    outline: none;
    border: 1px solid ${(p) => p.theme.colors.primary.accent};
  }

  &:not(:placeholder-shown) {
    color: ${(p) => p.theme.colors.primary.accent};
  }

  &[type='number'] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
const UserInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;
const UserWaterPredict = styled.label`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 24px;
  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    width: 100%;
  }
  @media (min-width: ${({ theme }) => theme.screens.desk}) {
    width: 100%;
  }
`;
const SaveButton = styled.button`
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
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    width: 100%;
  }
  @media (min-width: ${({ theme }) => theme.screens.desk}) {
    width: 100%;
  }
`;

const HeadContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: ${({ theme }) => theme.screens.tab}) {
    width: 100%;
  }
  @media (min-width: ${({ theme }) => theme.screens.desk}) {
    width: 100%;
  }
`;
const WaterAmountSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${(p) => p.theme.colors.primary.accent};
`;
const CloseIcon = styled.svg`
  background-color:;
`;

export {
  Modal,
  CloseIcon,
  Head,
  ButtonContainer,
  HeadContainer,
  ContainerGender,
  WaterAmountSpan,
  SaveButton,
  GenderPargh,
  GenderSpan,
  InfoPargh,
  InfoContainer,
  InfoSpan,
  GenderLabel,
  GenderInput,
  CalculateHead,
  UserWaterPredict,
  GenderContainer,
  UserLabel,
  UserInputs,
  CalculateForm,
  UserInputsContainer,
  WaterAmountParagh,
};
