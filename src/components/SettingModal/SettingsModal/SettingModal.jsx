import { useRef, useState } from 'react';
import { Field, useFormik } from 'formik';
import { AvatarsUploader } from '../AvatarsUploader/AvatarsUploader';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { PiEyeLight } from 'react-icons/pi';
import {
  AvatarToWrapper,
  AvatarWrapper,
  FormTitle,
  FormWrapper,
  IconToAvatar,
  StyledContainer,
  StyledTitle,
  TextToAvatar,
  Wrapper,
  FlexWrapper,
  Title,
  InputContainer,
  Input,
  Label,
  RadioGroup,
  AvatarRadio,
  RadioLabel,
  ButtonIcon,
} from './settings.styled';
import validationSchema from '../UserInfo/validationSchema';

export const Setting = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepPassword, setShowRepPassword] = useState(false);
  const modalRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      gender: 'female',
      name: '',
      email: '',
      currentPassword: '',
      newPassword: '',
      repeatPassword: '',
    },

    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.setFieldValue('currentPassword', '');
      actions.setFieldValue('newPassword', '');
      actions.setFieldValue('repeatPassword', '');

      actions.setSubmitting(false);
    },
  });

  return (
    <StyledContainer>
      <StyledTitle>Setting</StyledTitle>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <FormTitle>Your photo</FormTitle>
        <AvatarWrapper>
          <AvatarToWrapper></AvatarToWrapper>
          <IconToAvatar />
          <TextToAvatar>Upload a photo</TextToAvatar>
        </AvatarWrapper>
        <FlexWrapper>
          <Wrapper>
            <Title id="gender">Your gender</Title>
            <RadioGroup role="group">
              <RadioLabel>
                <AvatarRadio type="radio" name="gender" value="female" />
                Female
              </RadioLabel>
              <RadioLabel>
                <AvatarRadio type="radio" name="gender" value="male" />
                Male
              </RadioLabel>
            </RadioGroup>
            <Label htmlFor="name">Your full name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              title="Enter your full name"
              placeholder="Your full name"
            />
            <Label htmlFor="email">Your email address</Label>
            <Input
              type="text"
              name="email"
              id="email"
              title="Enter your email address"
              placeholder="Your email address"
            />
          </Wrapper>
          <Wrapper>
            <Title>Password</Title>
            <Label className="small">Current password:</Label>
            <InputContainer>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="currentPassword"
                id="currentPassword"
                title="Enter your current password"
                placeholder="Current password"
              />
              <ButtonIcon
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <PiEyeLight /> : <HiOutlineEyeSlash />}
              </ButtonIcon>
            </InputContainer>

            <Label className="small">New password:</Label>
            <InputContainer>
              <Input
                type={showNewPassword ? 'text' : 'password'}
                name="newPassword"
                id="newPassword"
                title="Enter new password"
                placeholder="New password"
              />
              <ButtonIcon
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <PiEyeLight /> : <HiOutlineEyeSlash />}
              </ButtonIcon>
            </InputContainer>

            <Label className="small">Repeat new password:</Label>
            <InputContainer>
              <Input
                type={showRepPassword ? 'text' : 'password'}
                name="repeatPassword"
                id="repeatPassword"
                title="Repeat new password"
                placeholder="Repeat new password"
              />
              <ButtonIcon
                type="button"
                onClick={() => setShowRepPassword(!showRepPassword)}
              >
                {showRepPassword ? <PiEyeLight /> : <HiOutlineEyeSlash />}
              </ButtonIcon>
            </InputContainer>
          </Wrapper>
        </FlexWrapper>
      </FormWrapper>
    </StyledContainer>
  );
};

{
  /*  
        
         
        
            
            
            
          </Wrapper>
           */
}
