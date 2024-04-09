import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  AuthTitle,
  Button,
  ErrorMessage,
  Form,
  Input,
  Label,
  LinkTo,
  LoginContainer,
  Container,
  LoginSection,
} from '../LoginPage.styled';

import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../../redux/forgotPassword/operations.js';
import { Link, useParams } from 'react-router-dom';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const ForgotSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });
  const { userId, temporaryId } = useParams();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ForgotSchema,
    onSubmit: ({ email }, { resetForm }) => {
      dispatch(forgotPassword({ email: email }));
      // <Link to={`signin/${userId}/${temporaryId}`}/>
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
            <Link to={`/signin/${userId}/${temporaryId}`}>Link</Link>
            <LinkTo to="/signin">Sing in</LinkTo>
          </Form>
        </LoginContainer>
      </Container>
    </LoginSection>
  );
};

export default ForgotPassword;
