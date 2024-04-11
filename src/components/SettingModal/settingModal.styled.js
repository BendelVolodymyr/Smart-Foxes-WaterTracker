import styled from 'styled-components';

export const StyledContainer = styled.div`
  flex-direction: column;
  gap: 24px;
  width: 230px;
  visibility: visible;
  margin: 0 12px;
  background-color: ${(p) => p.theme.colors.primary.bg};

  @media screen and (min-width: 768px) {
    width: 656px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 960px;
  }
`;

export const StyledTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  color: ${(p) => p.theme.colors.primary.text};
`;

export const FormTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  margin-bottom: 8px;
  color: ${(p) => p.theme.colors.primary.text};
`;

export const FormWrapper = styled.form`
  width: 100%;
  gap: 24px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 24px;
`;

export const TextToAvatar = styled.div`
  color: #407bff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  display: flex;
  gap: 8px;
  color: ${(p) => p.theme.colors.primary.text};
`;

export const AvatarPreview = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  outline: auto;
`;

export const AvatarLabel = styled.label`
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  color: ${(p) => p.theme.colors.primary.text};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25em;
  padding: 11px 10px;
  border-radius: 6px;
  border: 1px solid #afafaf;
  width: 100%;
  background-color: ${(p) =>
    p.theme.colors.primary.bg ? p.theme.colors.primary.bg : p.theme.colors.secondary.color6};
  &::-webkit-autofill {
    color: ${(p) => p.theme.colors.primary.text};
  }
  &::-webkit-input-placeholder {
    color: ${(p) => p.theme.colors.primary.text};
  }
  &::-moz-placeholder {
    color: #afafaf;
  }
  &:-moz-placeholder {
    color: #afafaf;
  }
  &:-ms-input-placeholder {
    color: #afafaf;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (min-width: 769px) and (max-width: 1439px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    max-width: 850px;
  }

  .Wrapper:last-child {
    margin-left: 20px;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: #2f2f2f;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1em;
  color: ${(p) => p.theme.colors.primary.text};
`;

export const Label = styled.label`
  display: block;
  margin-top: 12px;
  margin-bottom: 5px;
  color: #2f2f2f;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1em;
  color: ${(p) => p.theme.colors.primary.text};
  &.subtleLabel {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25em;
  }
`;

export const SelectorGroup = styled.div`
  height: 52px;
`;

export const GenderSelector = styled.input`
  display: inline;
  margin-top: 15px;
  margin-bottom: 53px;
  margin-right: 5px;
`;

export const SelectorLabel = styled.label`
  margin-right: 15px;
  color: #2f2f2f;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25em;
  color: ${(p) => p.theme.colors.primary.text};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonIcon = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background: transparent;
`;

export const SaveButton = styled.button`
  position: relative;
  width: 250px;
  height: 44px;
  padding: 10px 30px;
  gap: 10px;
  border-radius: 10px;
  background: #407bff;
  color: #ffffff;
  margin-left: auto;
  float: right;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    box-shadow 0.3s ease-in-out,
    background-color 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 14px 0px #407bff8a;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(64, 123, 255, 0);
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out;
  }

  &:hover:before {
    background-color: rgba(64, 123, 255, 0.1);
  }
`;
