import styled from 'styled-components';
import theme from '../../../styles/theme';

const Modal = styled.div`
  width: 704px;
  height: 696px;
  padding: 32px 24px 32px 24px;
  border-radius: 10px 0px 0px 0px;
`;
const Head = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  color: #${theme.lightTheme.colors.primary.text};
`;
const ContainerGender = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
const GenderPargh = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  color: #${theme.lightTheme.colors.primary.text};
`;
const GenderSpan = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #${theme.lightTheme.colors.primary.accent};
`;
const InfoContainer = styled.div`
  width: 544px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  border-color: #${theme.lightTheme.colors.secondary.color5};
`;
const InfoPargh = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-align: left;
  color: #8f8f8f;
`;
const InfoSpan = styled.span`
  color: #${theme.lightTheme.colors.primary.accent};
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
  color: #${theme.lightTheme.colors.primary.text};
`;
const GenderLabel = styled.label`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;
const GenderInput = styled.input`
  color: #${theme.lightTheme.colors.primary.bg};
  width: 14px;
  height: 14px;
  border: 1px solid;
  border-color: #${theme.lightTheme.colors.primary.accent};
  border-radius: 50%;
`;
const GenderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
const UserLabel = styled.label`
  width: 544px;
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
const UserInputs = styled.input`
  border-radius: 6px;
  border: 1px solid;
  width: 100%;
  padding: 12px 10px 12px 10px;
  border-color: #${theme.lightTheme.colors.secondary.color5};
`;
const UserInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export {
  Modal,
  Head,
  ContainerGender,
  GenderPargh,
  GenderSpan,
  InfoPargh,
  InfoContainer,
  InfoSpan,
  GenderLabel,
  GenderInput,
  CalculateHead,
  GenderContainer,
  UserLabel,
  UserInputs,
  CalculateForm,
  UserInputsContainer,
};
