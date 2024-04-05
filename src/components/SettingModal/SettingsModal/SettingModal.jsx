import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { PiEyeLight, PiDownload } from 'react-icons/pi';
import { updateUserInfo, uploadAvatar, refreshUser } from '../../../redux/auth/operations';
import { selectUser, selectIsAuthenticated } from '../../../redux/auth/selectors';

import {
  AvatarWrapper,
  FormTitle,
  FormWrapper,
  IconToAvatar,
  StyledContainer,
  StyledTitle,
  AvatarToWrapper,
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
  TextToAvatar,
  AvatarPreview,
} from './settings.styled';

export const Setting = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepPassword, setShowRepPassword] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [avatarPreview, setAvatarPreview] = useState(null);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(refreshUser());
    }
  }, [dispatch, isAuthenticated]);

  const formik = useFormik({
    initialValues: {
      gender: 'female',
      name: '',
      email: '',
      currentPassword: '',
      newPassword: '',
      repeatPassword: '',
      avatar: null,
    },
    onSubmit: async (values, actions) => {
      try {
        console.log('Submitting form...');
        console.log('Form values:', values);

        const formData = new FormData();
        formData.append('email', values.email);
        formData.append('name', values.name);
        formData.append('gender', values.gender);
        formData.append('oldPassword', values.currentPassword);
        formData.append('newPassword', values.newPassword);
        // Для перевірок,потім приберу
        if (values.avatar) {
          console.log('Avatar detected. Uploading avatar...');
          formData.append('avatar', values.avatar);
          await dispatch(uploadAvatar(formData));
          console.log('Avatar uploaded successfully.');
        } else {
          console.log('No avatar detected.');
        }

        console.log('Updating user info...');
        await dispatch(updateUserInfo(formData));
        console.log('User info updated successfully.');

        actions.resetForm();
        console.log('Form reset.');
      } catch (error) {
        console.error('Update error:', error);
      }
    },
  });

  const handleAvatarClick = () => {
    const fileInput = document.getElementById('avatarInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleAvatarChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue('avatar', file);

    if (file) {
      const objectURL = URL.createObjectURL(file);
      setAvatarPreview(objectURL);
    } else {
      setAvatarPreview(null);
    }
  };

  return (
    <StyledContainer>
      <StyledTitle>Setting</StyledTitle>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <FormTitle>Your photo</FormTitle>
        <AvatarWrapper onClick={handleAvatarClick}>
          <AvatarToWrapper>
            <input
              id="avatarInput"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              style={{ display: 'none' }}
            />
          </AvatarToWrapper>
          <TextToAvatar>
            <IconToAvatar />
            Upload a photo
          </TextToAvatar>
        </AvatarWrapper>
        {avatarPreview && <AvatarPreview src={avatarPreview} alt="Avatar Preview" />}
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
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <Label htmlFor="email">Your email address</Label>
            <Input
              type="text"
              name="email"
              id="email"
              title="Enter your email address"
              placeholder="Your email address"
              onChange={formik.handleChange}
              value={formik.values.email}
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
                onChange={formik.handleChange}
                value={formik.values.currentPassword}
              />
              <ButtonIcon type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <PiEyeLight /> : <HiOutlineEyeSlash />}
              </ButtonIcon>
            </InputContainer>

            <Label className="small">New password:</Label>
            <InputContainer>
              <Input
                type={showNewPassword ? 'text' : 'password'}
                name="newPassword"
                id="newPassword"
                title="Enter your new password"
                placeholder="New password"
                onChange={formik.handleChange}
                value={formik.values.newPassword}
              />
              <ButtonIcon type="button" onClick={() => setShowNewPassword(!showNewPassword)}>
                {showNewPassword ? <PiEyeLight /> : <HiOutlineEyeSlash />}
              </ButtonIcon>
            </InputContainer>

            <Label className="small">Repeat password:</Label>
            <InputContainer>
              <Input
                type={showRepPassword ? 'text' : 'password'}
                name="repeatPassword"
                id="repeatPassword"
                title="Enter your repeat password"
                placeholder="Repeat password"
                onChange={formik.handleChange}
                value={formik.values.repeatPassword}
              />
              <ButtonIcon type="button" onClick={() => setShowRepPassword(!showRepPassword)}>
                {showRepPassword ? <PiEyeLight /> : <HiOutlineEyeSlash />}
              </ButtonIcon>
            </InputContainer>
          </Wrapper>
        </FlexWrapper>
        <button type="submit">Update</button>
      </FormWrapper>
    </StyledContainer>
  );
};

{
  /*  
        
         
        
            
            
            
          </Wrapper>
           */
}
