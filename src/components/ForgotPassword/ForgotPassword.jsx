import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  AuthTitle,
  Button,
  Container,
  ErrorMessage,
  Form,
  Input,
  Label,
  LinkTo,
  LoginSection,
} from '../../pages/LoginPage/LoginPage.styled';
import { usePasswordReset } from '../../hooks/usePasswordReset';
import { ForgotContainer } from './ForgotPassword.styled';

const ForgotPassword = () => {
  const { resetPassword } = usePasswordReset();

  const ForgotSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ForgotSchema,
    onSubmit: ({ email }, { resetForm }) => {
      resetPassword({ email: email });
      resetForm();
    },
  });

  return (
    <LoginSection>
      <Container>
        <ForgotContainer>
          <Form onSubmit={formik.handleSubmit}>
            <AuthTitle>Forgot Password</AuthTitle>
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
            <Button type="submit">Send</Button>
            <LinkTo to="/signin">Sing in</LinkTo>
          </Form>
        </ForgotContainer>
      </Container>
    </LoginSection>
  );
};

export default ForgotPassword;
