import { useState } from "react";
import { LoginContainer, AuthTitle, Button,Form, LinkTo, Label, Input, ButtonPassword, ImgWrapp, ImgBottle } from "./LoginPage.styled";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { PiEyeLight } from "react-icons/pi";
import { useVisiblePassword } from "../../hooks/useVisiblePassword";
import bottleImg from './image/bottleAuth.png'


const LoginPage = () => {

const {handleShowPassword, toggleIcon, type} = useVisiblePassword();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const bottle = bottleImg;


const handleChangeEmail = event => {
  setEmail(event.target.value);
};

const handleChangePassword = event => {
  setPassword(event.target.value);
};

const handleSubmit = event =>{
  event.preventDefault();
  setEmail("");
  setPassword("");
}


  return (
  <LoginContainer>
     
<Form onSubmit={handleSubmit}> 
 <AuthTitle>Sing In</AuthTitle>
  <Label >
  Enter your email
    <Input placeholder="E-mail" name="email" type="email" autoComplete="off" value={email} onChange={handleChangeEmail} />
  </Label>
  <Label >
  Enter your password
    <Input placeholder="Password" name="password" type={type} autoComplete="off" value={password} onChange={handleChangePassword} />
    <ButtonPassword type="button" onClick={handleShowPassword}> 
    {toggleIcon ? <HiOutlineEyeSlash size={16} color="#407BFF"/> : <PiEyeLight size={16} color="#407BFF"/>} 
    </ButtonPassword>
    
  </Label>
  <Button type="submit">
    Sing In
  </Button>
  <LinkTo to="/registration">Sing up</LinkTo>
</Form>
<ImgWrapp>
  <ImgBottle src={bottle} alt="bottle" />
</ImgWrapp>
  </LoginContainer>)
};

export default LoginPage;
