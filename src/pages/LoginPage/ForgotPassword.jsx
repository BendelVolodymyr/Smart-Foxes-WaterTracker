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
  LoginContainer,
  LoginSection,
} from './LoginPage.styled';
import { usePasswordReset } from '../../hooks/usePasswordReset';



const ForgotPassword = () => {
  const { resetPassword} = usePasswordReset();

  const ForgotSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ForgotSchema,
    onSubmit: ({ email }, { resetForm }) => {
      resetPassword({email: email });
      resetForm();
    },
  });

  return (
    <LoginSection>
    <Container>
    <LoginContainer>
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
        <LinkTo to="/forgotPassword/:userId/:temporaryId">New Password</LinkTo>
        <LinkTo to="/signin">Sing in</LinkTo>
      </Form>
    </LoginContainer>
    </Container>
    </LoginSection>
  );
};

export default ForgotPassword;
