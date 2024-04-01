import { useState } from "react";
import { LoginContainer, AuthTitle, Button,Form, LinkTo, Label, Input, ButtonPassword } from "./LoginPage.styled";
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { PiEyeLight } from "react-icons/pi";
const LoginPage = () => {

const [toggleIcon, setToggleIcon] = useState(true);

const handleShowPassword = () => {
  setToggleIcon(!toggleIcon);
}

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    console.log(email, password  );
form.reset();
  }

  return (
  <LoginContainer>
      <AuthTitle>Sing In</AuthTitle>
<Form onSubmit={handleSubmit}> 
  <Label >
  Enter your email
    <Input placeholder="E-mail" name="email" type="email" autoComplete="off"/>
  </Label>
  <Label >
  Enter your password
    <Input placeholder="Password" name="password" type="password" autoComplete="off" />
    <ButtonPassword type="button" onClick={handleShowPassword}> {toggleIcon ? <HiOutlineEyeSlash size={16} color="#407BFF"/> : <PiEyeLight size={16} color="#407BFF"/>} </ButtonPassword>
    
  </Label>
  <Button type="submit">
    Sing In
  </Button>
  <LinkTo to="/registration">Sing up</LinkTo>
</Form>
  </LoginContainer>)
};

export default LoginPage;
