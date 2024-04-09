import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  AuthTitle,
  Button,
  ErrorMessage,
  Form,
  ImgBottle,
  ImgWrapp,
  Input,
  Label,
  LinkTo,
  LoginContainer,
} from './LoginPage.styled';
import bottleImg from './image/bottleAuth.png';

const ForgotPassword = () => {
  const bottle = bottleImg;

  const ForgotSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ForgotSchema,
    onSubmit: ({ email }, { resetForm }) => {
      console.log({ email: email });
      resetForm();
    },
  });

  return (
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
        <LinkTo to="/signin">Sing in</LinkTo>
      </Form>
      <ImgWrapp>
        <ImgBottle src={bottle} alt="bottle" />
      </ImgWrapp>
    </LoginContainer>
  );
};

export default ForgotPassword;
