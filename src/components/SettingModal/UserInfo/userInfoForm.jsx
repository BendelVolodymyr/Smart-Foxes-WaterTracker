import { useState } from 'react';
import { Formik } from 'formik';
import {
  Wrapper,
  FlexWrapper,
  FormStyled,
  Title,
  InputContainer,
  Input,
  Label,
  RadioGroup,
  Radio,
  RadioLabel,
  Button,
  ButtonIcon,
  ErrorMessage,
} from './userinfoform.styled';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { PiEyeLight } from 'react-icons/pi';
import validationSchema from './validationSchema';

const UserInfoForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepPassword, setShowRepPassword] = useState(false);

  return (
    <Formik 
    initialValues={{
        gender: 'female',
        name: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        repeatPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setFieldValue('currentPassword', '');
        actions.setFieldValue('newPassword', '');
        actions.setFieldValue('repeatPassword', '');

        actions.setSubmitting(false);
      }}
    >
      {({ handleSubmit, errors, touched }) => {
        return (
          <FormStyled name="form" onSubmit={handleSubmit}>
            <FlexWrapper>
              <Wrapper>
                <Title id="gender">Your gender</Title>
                <RadioGroup role="group" aria-labelledby="gender-title">
                  <RadioLabel>
                    <Radio type="radio" name="gender" value="female" />
                    Female
                  </RadioLabel>
                  <RadioLabel>
                    <Radio type="radio" name="gender" value="male" />
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
                {touched.repeatPassword && errors.repeatPassword && (
                  <ErrorMessage>{errors.repeatPassword}</ErrorMessage>
                )}
              </Wrapper>
            </FlexWrapper>
            <Button type="submit">Save</Button>
          </FormStyled>
        );
      }}
    </Formik>
  );
};

export default UserInfoForm;
