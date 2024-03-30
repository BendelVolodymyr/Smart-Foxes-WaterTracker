import { LoginContainer, AuthTitle, Button,Form, LinkTo, Label, Input } from "./LoginPage.styled";
// import { HiOutlineEyeSlash } from "react-icons/hi2";
const LoginPage = () => {

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    console.log(email, password  );
form.reset();
  }

  return <LoginContainer>
      <AuthTitle>Sing In</AuthTitle>
<Form onSubmit={handleSubmit}> 
  <Label >
  Enter your email
    <Input placeholder="E-mail" name="email" type="email" autoComplete="off"/>
  </Label>
  <Label >
  Enter your password
    <Input placeholder="Password" name="password" type="password" autoComplete="off"/>
    {/* <HiOutlineEyeSlash /> */}
  </Label>
  <Button type="submit">
    Sing In
  </Button>
  <LinkTo to="/registration">Sing up</LinkTo>
</Form>
  </LoginContainer>;
};

export default LoginPage;
