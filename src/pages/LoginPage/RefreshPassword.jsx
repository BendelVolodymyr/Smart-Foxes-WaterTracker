import { useFormik } from 'formik';
import * as Yup from 'yup';
import bottleImg from './image/bottleAuth.png';
import { useVisiblePassword } from '../../hooks/useVisiblePassword';
import {
  AuthTitle,
  Button,
  ButtonPassword,
  ErrorMessage,
  Form,
  IconConteiner,
  ImgBottle,
  ImgWrapp,
  Input,
  Label,
  LoginContainer,
} from './LoginPage.styled';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { PiEyeLight } from 'react-icons/pi';
const RefreshPassword = () => {
  const bottle = bottleImg;
  const { handleShowPassword, toggleIcon, type } = useVisiblePassword();

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
    onSubmit: ({ password, refreshPassword }, { resetForm }) => {
      console.log({ password: password, refreshPassword: refreshPassword });
      resetForm();
    },
  });

  return (
    <LoginContainer>
      <Form onSubmit={formik.handleSubmit}>
        <AuthTitle>Change Password</AuthTitle>
        <Label>
          New password
          <IconConteiner>
            <Input
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
        <Label>
          Confirm password
          <IconConteiner>
            <Input
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
        </Label>
        <Button type="submit">Reset password</Button>
      </Form>
      <ImgWrapp>
        <ImgBottle src={bottle} alt="bottle" />
      </ImgWrapp>
    </LoginContainer>
  );
};

export default RefreshPassword;
