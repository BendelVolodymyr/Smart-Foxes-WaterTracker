import { useFormik } from 'formik';
import { useState } from 'react';
import { RiDownload2Line } from 'react-icons/ri';
import {
  FormStyled,
  InputContainer,
  Input,
  Label,
  ErrorText,
  StyledAvatarSection,
  StyledAvatar,
  StyledUploadButton,
} from './avatarsuploader.styled';
import { uploadAvatar } from '../../../redux/auth/operations';

export const AvatarsUploader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleSubmit = async (values) => {
    setIsLoading(true);
    setUploadError(null);

    try {
      const formData = new FormData();
      formData.append('avatar', values.avatar);
      const response = await uploadAvatar(formData);
      console.log('Avatar uploaded successfully:', response);
    } catch (error) {
      console.error('Upload error:', error);
      setUploadError(error.message || 'Upload failed');
    } finally {
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      avatar: '',
    },
    onSubmit: handleSubmit,
    validate: (values) => {
      const errors = {};
      if (!values.avatar) {
        errors.avatar = 'Please select a photo';
      }
      return errors;
    },
  });

  const handleChange = (e) => {
    formik.setFieldValue('avatar', e.target.files[0]);
  };

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <Label htmlFor="avatar">Your photo</Label>
      <InputContainer>
        <StyledAvatarSection>
          {formik.values.avatar ? (
            <StyledAvatar
              src={URL.createObjectURL(formik.values.avatar)}
              alt="Avatar"
            />
          ) : (
            <StyledAvatar src="" alt="Avatar" />
          )}
          <StyledUploadButton>
            <p>{formik.values.avatar ? 'Change photo' : 'Upload a photo'}</p>
            <RiDownload2Line />
            <Input type="file" name="avatar" onChange={handleChange} />
          </StyledUploadButton>
        </StyledAvatarSection>
      </InputContainer>
      <ErrorText>
        {formik.touched.avatar && formik.errors.avatar && (
          <p style={{ color: 'red' }}>{formik.errors.avatar}</p>
        )}
      </ErrorText>
      {isLoading && <p>Loading...</p>}
      {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>}
    </FormStyled>
  );
};
