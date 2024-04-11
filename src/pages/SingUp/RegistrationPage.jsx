import {
  AuthTitle,
  Button,
  Input,
  Label,
  LinkTo,
  IconConteiner,
  ErrorMessage,
  ButtonGoogle,
  LoginSection,
  Container,
} from '../LoginPage/LoginPage.styled';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { PiEyeLight } from 'react-icons/pi';
import { ButtonPassword } from '../LoginPage/LoginPage.styled';
import { useVisiblePassword } from '../../hooks/useVisiblePassword';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { signUp } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';
import PasswordStrengthBar from 'react-password-strength-bar';
import { SingUpContainer, Form, InputPassword } from './Registration.styled';

const Registration = () => {
  const { handleShowPassword, toggleIcon, type } = useVisiblePassword();
  const dispatch = useDispatch();
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password should be of minimum 8 characters length')
      .max(64, 'Password should be of max 64 characters length')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords does not match'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupSchema,
    onSubmit: ({ email, password }, { resetForm }) => {
      dispatch(signUp({ email: email, password: password }));
      resetForm();
    },
  });

  const handleLogInWithPopUp = () => {
    window.location.assign('https://smart-foxes-backend-watertracker.onrender.com/api/auth/google');
  };

  return (
    <LoginSection>
      <Container>
        <SingUpContainer>
          <Form onSubmit={formik.handleSubmit}>
            <AuthTitle>Sign up</AuthTitle>
            <Label>
              Enter your email
              <Input
                placeholder="E-mail"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                autoComplete="off"
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email}
              />
              {formik.touched.email && formik.errors.email && (
                <ErrorMessage>{formik.errors.email}</ErrorMessage>
              )}
            </Label>
            <Label>
              Enter your password
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
              Repeat password
              <IconConteiner>
                <InputPassword
                  placeholder="Repeat password"
                  name="confirmPassword"
                  type={type}
                  autoComplete="off"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.confirmPassword && formik.errors.confirmPassword}
                />
                <ButtonPassword type="button" onClick={handleShowPassword}>
                  {toggleIcon ? (
                    <HiOutlineEyeSlash size={16} color="#407BFF" />
                  ) : (
                    <PiEyeLight size={16} color="#407BFF" />
                  )}
                </ButtonPassword>
              </IconConteiner>
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage>
              )}
              <PasswordStrengthBar password={formik.values.confirmPassword} minLength={8} />
            </Label>
            <Button type="submit">Sign up</Button>
            <ButtonGoogle
              name="google-auth"
              onClick={handleLogInWithPopUp}
              type="button"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 15,
              }}
            >
              <FcGoogle style={{ width: 25, height: 25 }} /> Google
            </ButtonGoogle>
            <LinkTo to="/signin">Sign In</LinkTo>
          </Form>
        </SingUpContainer>
      </Container>
    </LoginSection>
  );
};

export default Registration;
