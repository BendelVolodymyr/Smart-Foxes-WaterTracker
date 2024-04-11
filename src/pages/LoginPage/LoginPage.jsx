import {
  LoginContainer,
  AuthTitle,
  Button,
  LinkTo,
  Label,
  Input,
  ButtonPassword,
  Form,
  ErrorMessage,
  IconConteiner,
  ButtonGoogle,
  LoginSection,
  Container,
} from './LoginPage.styled';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { PiEyeLight } from 'react-icons/pi';
import { useVisiblePassword } from '../../hooks/useVisiblePassword';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/operations';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext/ModalContext';

import ModalUser from '../../components/WelcomeModalUser/ModalUser';
import { InputPassword } from '../SingUp/Registration.styled';

const LoginPage = () => {
  const { handleShowPassword, toggleIcon, type } = useVisiblePassword();
  const dispatch = useDispatch();
  const { openModal } = useContext(ModalContext);
  const handleLogInWithPopUp = () => {
    window.location.assign('https://smart-foxes-backend-watertracker.onrender.com/api/auth/google');
  };

  const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password should be of minimum 8 characters length')
      .max(64, 'Password should be of max 64 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SigninSchema,
    onSubmit: ({ email, password }, { resetForm }) => {
      dispatch(signIn({ email: email, password: password }));
      setTimeout(() => {
        openModal(
          <>
            <ModalUser />
          </>
        );
      }, 1000);
      resetForm();
    },
  });

  return (
    <LoginSection>
      <Container>
        <LoginContainer>
          <Form onSubmit={formik.handleSubmit}>
            <AuthTitle>Sign In</AuthTitle>
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
            </Label>
            <Button type="submit">Sign In</Button>
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
            <LinkTo to="/forgotPassword">Forgot password?</LinkTo>
            <LinkTo to="/signup">Sign up</LinkTo>
          </Form>
        </LoginContainer>
      </Container>
    </LoginSection>
  );
};

export default LoginPage;
