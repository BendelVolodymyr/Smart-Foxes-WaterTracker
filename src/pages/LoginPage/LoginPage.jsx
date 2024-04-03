

import { LoginContainer, AuthTitle, Button, LinkTo, Label, Input, ButtonPassword, ImgWrapp, ImgBottle, Form, ErrorMessage, IconConteiner } from "./LoginPage.styled";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { PiEyeLight } from "react-icons/pi";
import { useVisiblePassword } from "../../hooks/useVisiblePassword";
import bottleImg from './image/bottleAuth.png'
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';

// import { useDispatch } from "react-redux";
// import { signIn } from "../../redux/auth/operations";

import { signIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const LoginPage = () => {

const {handleShowPassword, toggleIcon, type} = useVisiblePassword();
// const dispatch = useDispatch();
const bottle = bottleImg;

  const formData = {
    email,
    password,
  };

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Password should be of minimum 8 characters length')
  .max(64, 'Password should be of max 64 characters length')
  .required('Password is required'),
});


const formik = useFormik({
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema: SigninSchema,
  onSubmit: (values, { resetForm }) => {
    console.log((JSON.stringify(values, null, 2)));
    resetForm();
  },
});

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
    console.log(formData);
    dispatch(signIn(formData));
  };

  return (
  <LoginContainer>
    <Formik ></Formik>
      <Form onSubmit={formik.handleSubmit}> 
 <AuthTitle>Sing In</AuthTitle>
  <Label >
  Enter your email
    <Input placeholder="E-mail" name="email" type="email"  value={formik.values.email}
          onChange={formik.handleChange} autoComplete="off" />
          {formik.touched.email && formik.errors.email && <ErrorMessage>{formik.errors.email}</ErrorMessage>}
  </Label>
  <Label >
  Enter your password
  <IconConteiner>
      <Input placeholder="Password" name="password" type={type} autoComplete="off" value={formik.values.password}
          onChange={formik.handleChange} />
            <ButtonPassword type="button" onClick={handleShowPassword}> 
    {toggleIcon ? <HiOutlineEyeSlash size={16} color="#407BFF"/> : <PiEyeLight size={16} color="#407BFF"/>} 
    </ButtonPassword>
  </IconConteiner>
  {formik.touched.password && formik.errors.password && <ErrorMessage>{formik.errors.password}</ErrorMessage>}

    
  </Label>
  <Button type="submit">
    Sing In
  </Button>
  <LinkTo to="/signup">Sing up</LinkTo>
</Form>
<ImgWrapp>
  <ImgBottle src={bottle} alt="bottle" />
</ImgWrapp>
  </LoginContainer>
  
  )

};

export default LoginPage;

