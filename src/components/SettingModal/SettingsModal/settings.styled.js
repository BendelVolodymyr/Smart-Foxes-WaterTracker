import styled from 'styled-components';
import { RiDownload2Line } from 'react-icons/ri';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 256px;
    visibility-y: visible;

    @media screen and (min-width: 768px) {
        width: 80%;
    }

    @media screen and (min-width: 1440px) {
        width: 1000px;
    }
`;
export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    gap: 24px;
`;

export const StyledTitle = styled.h1`
    margin: 0;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.23em;
    margin: 0;
`;

export const FormTitle = styled.h2`
    display: block;
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.1em;

    text-align: start;
`;

export const StyledCloseButton = styled.button`
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
`;

export const AvatarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: start;
    align-items: center;
`;

export const AvatarToWrapper = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;

export const IconToAvatar = styled(RiDownload2Line)`
    width: 16px;
    height: 16px;
    color: #407bff;
`;

export const TextToAvatar = styled.p`
    color: #407bff;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const FlexWrapper = styled.div`
    display: flex;
    gap: 20px;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
    @media screen and (min-width: 768px) {
        max-width: 850px;
    }
`;

export const Title = styled.div`
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1em;
`;
export const InputContainer = styled.div`
    position: relative;
`;

export const Input = styled.input`
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25em;
    padding: 12px 10px;
    border-radius: 6px;
    border: 1px solid #afafaf;
    width: 100%;
    &.error {
        color: #e74c3c;
        border: 1px solid #e74c3c;
    }
    &::-webkit-autofill {
        color: #afafaf;
    }
    &::-webkit-input-placeholder {
        color: #afafaf;
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

export const Label = styled.label`
    display: block;
    margin-top: 15px;
    margin-bottom: 5px;
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.1em;
    &.small {
        font-size: 16px;
        font-weight: 400;
        line-height: 1.25em;
    }
`;

export const RadioLabel = styled.label`
    margin-right: 15px;
    color: #2f2f2f;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25em;
`;

export const RadioGroup = styled.div`
    margin-bottom: auto;
`;

export const AvatarRadio = styled.input`
    display: inline;
    margin-top: 15px;
    margin-bottom: 53px;
    margin-right: 5px;
`;

export const ErrorMessage = styled.div`
    color: red;
    font-size: 12px;
    margin-top: 4px;
`;
export const ButtonIcon = styled.button`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    background: transparent;
`;
export const AvatarPreview = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;
