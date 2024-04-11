import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  AuthTitle,
  Button,
  ButtonPassword,
  Container,
  ErrorMessage,
  Form,
  IconConteiner,
  Label,
  LoginSection,
} from '../../pages/LoginPage/LoginPage.styled';
import PasswordStrengthBar from 'react-password-strength-bar';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { PiEyeLight } from 'react-icons/pi';
import { useVisiblePassword } from '../../hooks/useVisiblePassword';
import { usePasswordUpdate } from '../../hooks/usePasswordReset';
import { RefreshContainer } from './ForgotPassword.styled';
import { InputPassword } from '../../pages/SingUp/Registration.styled';
const RefreshPassword = () => {
  const { handleShowPassword, toggleIcon, type } = useVisiblePassword();
  const { passwordUpdate } = usePasswordUpdate();
  const RefreshingPassword = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Password should be of minimum 8 characters length')
      .max(64, 'Password should be of max 64 characters length')
      .required('Password is required'),
    refreshPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords does not match'),
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      refreshPassword: '',
    },
    validationSchema: RefreshingPassword,
    onSubmit: ({ password }, { resetForm }) => {
      passwordUpdate({ password: password });
      resetForm();
    },
  });

  return (
    <LoginSection>
      <Container>
        <RefreshContainer>
          <Form onSubmit={formik.handleSubmit}>
            <AuthTitle>Change Password</AuthTitle>
            <Label>
              New password
              <IconConteiner>
                <InputPassword
                  placeholder="Password"
                  name="password"
                  type={type}
                  autoComplete="off"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && formik.errors.password}
                />
                <ButtonPassword type="button" onClick={handleShowPassword}>
                  {toggleIcon ? (
                    <HiOutlineEyeSlash size={16} color="#407BFF" />
                  ) : (
                    <PiEyeLight size={16} color="#407BFF" />
                  )}
                </ButtonPassword>
              </IconConteiner>
              {formik.touched.password && formik.errors.password && (
                <ErrorMessage>{formik.errors.password}</ErrorMessage>
              )}
              <PasswordStrengthBar password={formik.values.password} minLength={8} />
            </Label>
            <Label>
              Confirm password
              <IconConteiner>
                <InputPassword
                  placeholder="Confirm password"
                  name="refreshPassword"
                  type={type}
                  autoComplete="off"
                  value={formik.values.refreshPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.refreshPassword && formik.errors.refreshPassword}
                />
                <ButtonPassword type="button" onClick={handleShowPassword}>
                  {toggleIcon ? (
                    <HiOutlineEyeSlash size={16} color="#407BFF" />
                  ) : (
                    <PiEyeLight size={16} color="#407BFF" />
                  )}
                </ButtonPassword>
              </IconConteiner>
              {formik.touched.refreshPassword && formik.errors.refreshPassword && (
                <ErrorMessage>{formik.errors.refreshPassword}</ErrorMessage>
              )}
              <PasswordStrengthBar password={formik.values.refreshPassword} minLength={8} />
            </Label>
            <Button type="submit">Reset password</Button>
          </Form>
        </RefreshContainer>
      </Container>
    </LoginSection>
  );
};

export default RefreshPassword;
