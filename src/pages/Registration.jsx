import { AuthTitle, Button, Input, Label, LinkTo, Form, LoginContainer } from "./LoginPage.styled";

const Registration = () => {

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


  return <LoginContainer>
  <AuthTitle>Sing Up</AuthTitle>
<Form onSubmit={handleSubmit}> 
<Label >
Enter your email
<Input placeholder="E-mail" name="email" type="email" autoComplete="off"/>
</Label>
<Label >
Enter your password
<Input placeholder="Password" name="password" type="password" autoComplete="off"/>
</Label>
<Label >
Repeat password
<Input placeholder="Repeat password" name="confirmPassword" type="password" autoComplete="off"/>
</Label>
<Button type="submit">
Sing Up
</Button>
<LinkTo to="/login">Sing in</LinkTo>
</Form>
</LoginContainer>
};

export default Registration;
