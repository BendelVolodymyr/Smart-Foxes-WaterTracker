import { useState } from "react";
import { AuthTitle, Button, Input, Label, LinkTo, Form, LoginContainer } from "./LoginPage/LoginPage.styled"
import { HiOutlineEyeSlash } from "react-icons/hi2";
import { PiEyeLight } from "react-icons/pi";
import { ButtonPassword } from "./LoginPage/LoginPage.styled";
const Registration = () => {

  const [toggleIcon, setToggleIcon] = useState(true);

  const handleShowPassword = () => {
    setToggleIcon(!toggleIcon);
  }
  


  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const confirmPassword = form.elements.confirmPassword.value;
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
form.reset();
  }


  return (
    <LoginContainer>
  <AuthTitle>Sing Up</AuthTitle>
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
<Label >
Repeat password
<Input placeholder="Repeat password" name="confirmPassword" type="password" autoComplete="off"/>
<ButtonPassword type="button" onClick={handleShowPassword}> {toggleIcon ? <HiOutlineEyeSlash size={16} color="#407BFF"/> : <PiEyeLight size={16} color="#407BFF"/>} </ButtonPassword>
</Label>
<Button type="submit">
Sing Up
</Button>
<LinkTo to="/login">Sing in</LinkTo>
</Form>
</LoginContainer>
  )
};

export default Registration;
