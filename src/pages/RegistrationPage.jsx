import { AuthTitle, Button, Input, Label, LinkTo, LoginContainer, ImgWrapp, ImgBottle, Form, IconConteiner, ErrorMessage } from "./LoginPage/LoginPage.styled"
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { PiEyeLight } from "react-icons/pi";
import { ButtonPassword } from "./LoginPage/LoginPage.styled";
import { useVisiblePassword } from "../hooks/useVisiblePassword";
import bottleImg from './LoginPage/image/bottleAuth.png';
import * as Yup from 'yup';
import { useFormik } from "formik";

const Registration = () => {
  const bottle = bottleImg;
  const {handleShowPassword, toggleIcon, type} = useVisiblePassword();

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password should be of minimum 8 characters length')
    .max(64, 'Password should be of max 64 characters length')
    .required('Password is required'),
    confirmPassword:Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword:''
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      console.log((JSON.stringify(values, null, 2)));
      resetForm();
    },
  });
  

  return (
    <LoginContainer>
<Form onSubmit={formik.handleSubmit}> 
 <AuthTitle>Sing Up</AuthTitle>
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
<Label >
Repeat password
<IconConteiner>
<Input placeholder="Repeat password" name="confirmPassword" type={type} autoComplete="off" value={formik.values.confirmPassword}  onChange={formik.handleChange}/>
<ButtonPassword type="button" onClick={handleShowPassword}> {toggleIcon ? <HiOutlineEyeSlash size={16} color="#407BFF"/> : <PiEyeLight size={16} color="#407BFF"/>} </ButtonPassword>
{formik.touched.confirmPassword && formik.errors.confirmPassword && <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage>}
</IconConteiner>

</Label>
<Button type="submit">
Sing Up
</Button>
<LinkTo to="/signin">Sing in</LinkTo>
</Form>
<ImgWrapp>
  <ImgBottle src={bottle} alt="bottle" />
</ImgWrapp>
</LoginContainer>
  )
};

export default Registration;
