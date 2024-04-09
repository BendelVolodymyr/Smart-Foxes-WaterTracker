import { useState } from 'react';
import { useFormik } from 'formik';
import PasswordStrengthBar from 'react-password-strength-bar';
import { useDispatch } from 'react-redux';
import { updateUserInfo, uploadAvatar } from '../../redux/auth/operations';
import useAuth from '../../hooks/useAuth';
import { Snackbar, Alert, Tooltip, Chip } from '@mui/material';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { PiEyeLight } from 'react-icons/pi';
import { RiDownload2Line as UploadIcon } from 'react-icons/ri';
import { ReactComponent as DefaultAvatar } from '../../assets/header-icons/uer-avatar-icon.svg';
import FadeLoader from 'react-spinners/ClipLoader';
import {
  StyledContainer,
  StyledTitle,
  FormTitle,
  FormWrapper,
  AvatarWrapper,
  TextToAvatar,
  AvatarPreview,
  AvatarLabel,
  InputContainer,
  Input,
  Wrapper,
  FlexWrapper,
  Title,
  Label,
  SelectorGroup,
  GenderSelector,
  SelectorLabel,
  ButtonContainer,
  ButtonIcon,
  SaveButton,
} from './settingModal.styled';
export const SettingModal = () => {
  const dispatch = useDispatch();

  const BASE_AVATAR_URL = 'https://smart-foxes-backend-watertracker.onrender.com/';

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);
  const [passwordMismatchError, setPasswordMismatchError] = useState('');
  const [passwordChangedAt, setPasswordChangedAt] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarStatus, setSnackbarStatus] = useState('success');
  const [avatarLoading, setAvatarLoading] = useState(false);

  const { user } = useAuth();

  const formik = useFormik({
    initialValues: {
      gender: user.gender,
      name: user.name || '',
      email: user.email || '',
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
      avatar: '',
    },
    onSubmit: async (values, actions) => {
      setIsSubmitting(true);
      try {
        const dataToUpdate = {};
        if (values.name !== user.name) {
          dataToUpdate.name = values.name;
        }
        if (values.gender !== user.gender) {
          dataToUpdate.gender = values.gender;
        }
        if (values.email !== user.email) {
          dataToUpdate.email = values.email;
        }
        if (
          values.newPassword &&
          values.newPassword.length >= 8 &&
          values.newPassword === values.repeatPassword
        ) {
          dataToUpdate.oldPassword = values.oldPassword;
          dataToUpdate.newPassword = values.newPassword;
          setPasswordChangedAt(new Date().toLocaleString());
        }

        if (Object.keys(dataToUpdate).length === 0) {
          setIsSubmitting(false);
          setOpenSnackbar(true);
          setSnackbarStatus('info');
          actions.resetForm();
          return;
        }

        if (values.newPassword !== values.repeatPassword) {
          setPasswordMismatchError("Passwords don't match");
          setIsSubmitting(false);
          return;
        }

        await dispatch(updateUserInfo(dataToUpdate));

        if (values.avatar) {
          await dispatch(uploadAvatar(values));
        }
        if (Object.keys(dataToUpdate).length > 0) {
          setOpenSnackbar(true);
          setSnackbarStatus('success');
          actions.resetForm();
        } else {
          setOpenSnackbar(true);
          setSnackbarStatus('info');
          actions.resetForm();
        }
      } catch (error) {
        console.error('Update error:', error);
        if (
          error.response &&
          error.response.status === 401 &&
          error.response.data.error === 'Incorrect current password'
        ) {
          console.error('Unauthorized: Incorrect current password');
          setPasswordMismatchError('Incorrect current password');
          setSnackbarStatus('error');
        } else {
          setOpenSnackbar(true);
          setSnackbarStatus('error');
        }
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const onChangeAvatar = async ({ target: { files } }) => {
    try {
      setAvatarLoading(true);
      const formData = new FormData();
      formData.append('avatar', files[0]);

      await dispatch(uploadAvatar(formData));
    } catch (error) {
      console.error('Avatar upload error:', error);
    } finally {
      setAvatarLoading(false);
    }
  };

  return (
    <StyledContainer>
      <StyledTitle>Settings</StyledTitle>
      <FormWrapper>
        <FormTitle>Your photo</FormTitle>
        <AvatarWrapper>
          <div
            style={{
              // paddingTop: 24,
              width: 80,
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {avatarLoading ? (
              <FadeLoader color="#407BFF" />
            ) : user.avatarURL ? (
              <AvatarPreview src={`${BASE_AVATAR_URL}${user.avatarURL}`} alt="avatar" />
            ) : (
              <DefaultAvatar style={{ width: 64, height: 64 }} />
            )}
          </div>
          <AvatarLabel>
            <TextToAvatar>
              <UploadIcon />
              Upload a photo
            </TextToAvatar>
            <input
              type="file"
              name="upload_photo"
              className="photo-input"
              accept=".png, .jpg, .jpeg"
              onChange={onChangeAvatar}
              style={{ opacity: 0, width: '1px' }}
            />
          </AvatarLabel>
        </AvatarWrapper>
        <FlexWrapper>
          <Wrapper>
            <Title id="gender">Your gender</Title>
            <SelectorGroup role="group">
              <SelectorLabel>
                <GenderSelector
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formik.values.gender === 'female'}
                  onChange={formik.handleChange}
                />
                Female
              </SelectorLabel>
              <SelectorLabel>
                <GenderSelector
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formik.values.gender === 'male'}
                  onChange={formik.handleChange}
                />
                Male
              </SelectorLabel>
            </SelectorGroup>
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
            <Tooltip title="Your email should be secure and yours. Enter email which you have access to.">
              <Label htmlFor="email">Your email address</Label>
            </Tooltip>
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
            {!isSubmitting && (
              <Tooltip
                title="Service notification that helps you to remember when password was changed. It's disappear after reloading the page."
                placement="top"
              >
                <div>
                  {passwordChangedAt && (
                    <Chip
                      label={`Password changed at ${passwordChangedAt}`}
                      color="primary"
                      placement="top"
                      sx={{ marginBottom: 2 }}
                    />
                  )}
                </div>
              </Tooltip>
            )}
            <Tooltip title="Your password should be secure for preventing unauthorized access to your data">
              <Title>Password</Title>
            </Tooltip>
            <Label className="subtleLabel">Current password:</Label>
            <InputContainer>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="oldPassword"
                id="oldPassword"
                title="Enter your current password"
                placeholder="Current password"
                onChange={formik.handleChange}
                value={formik.values.oldPassword}
              />
              <ButtonIcon type="button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <PiEyeLight /> : <HiOutlineEyeSlash />}
              </ButtonIcon>
            </InputContainer>
            <Label className="subtleLabel">New password:</Label>
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
            <PasswordStrengthBar password={formik.values.newPassword} />
            <Label className="subtleLabel">Repeat password:</Label>
            <InputContainer>
              <Input
                type={showRepeatedPassword ? 'text' : 'password'}
                name="repeatPassword"
                id="repeatPassword"
                title="Enter your repeat password"
                placeholder="Repeat password"
                onChange={formik.handleChange}
                value={formik.values.repeatPassword}
              />
              <ButtonIcon
                type="button"
                onClick={() => setShowRepeatedPassword(!showRepeatedPassword)}
              >
                {showRepeatedPassword ? <PiEyeLight /> : <HiOutlineEyeSlash />}
              </ButtonIcon>
            </InputContainer>
            {passwordMismatchError && <Alert severity="error">{passwordMismatchError}</Alert>}
          </Wrapper>
        </FlexWrapper>
        <ButtonContainer>
          <SaveButton
            type="button"
            style={{ marginTop: 40, marginLeft: 'auto' }}
            onClick={formik.handleSubmit}
            disabled={passwordMismatchError || isSubmitting}
          >
            {isSubmitting ? 'Loading...' : 'Save'}
          </SaveButton>
        </ButtonContainer>
      </FormWrapper>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Alert severity={snackbarStatus}>
          {snackbarStatus === 'success'
            ? 'Information Updated Successfully!'
            : 'Error Updating Information'}
        </Alert>
      </Snackbar>
    </StyledContainer>
  );
};
