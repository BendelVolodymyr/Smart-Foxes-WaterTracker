import { useState } from 'react';
import {
  AuthTitle,
  Button,
  Input,
  Label,
  LinkTo,
  Form,
  LoginContainer,
  ImgWrapp,
  ImgBottle,
} from './LoginPage/LoginPage.styled';
import { HiOutlineEyeSlash } from 'react-icons/hi2';
import { PiEyeLight } from 'react-icons/pi';
import { ButtonPassword } from './LoginPage/LoginPage.styled';
import { useVisiblePassword } from '../hooks/useVisiblePassword';
import bottleImg from './LoginPage/image/bottleAuth.png';

import { signUp } from '../redux/auth/operations';
import { useDispatch } from 'react-redux';

const Registration = () => {
  const bottle = bottleImg;
  const { handleShowPassword, toggleIcon, type } = useVisiblePassword();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const formData = {
    email,
    password,
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    console.log(formData);
    dispatch(signUp(formData));
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <AuthTitle>Sing Up</AuthTitle>
        <Label>
          Enter your email
          <Input
            placeholder="E-mail"
            name="email"
            type="email"
            autoComplete="off"
            value={email}
            onChange={handleChangeEmail}
          />
        </Label>
        <Label>
          Enter your password
          <Input
            placeholder="Password"
            name="password"
            type={type}
            autoComplete="off"
            value={password}
            onChange={handleChangePassword}
          />
          <ButtonPassword type="button" onClick={handleShowPassword}>
            {' '}
            {toggleIcon ? (
              <HiOutlineEyeSlash size={16} color="#407BFF" />
            ) : (
              <PiEyeLight size={16} color="#407BFF" />
            )}{' '}
          </ButtonPassword>
        </Label>
        <Label>
          Repeat password
          <Input
            placeholder="Repeat password"
            name="confirmPassword"
            type={type}
            autoComplete="off"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
          />
          <ButtonPassword type="button" onClick={handleShowPassword}>
            {' '}
            {toggleIcon ? (
              <HiOutlineEyeSlash size={16} color="#407BFF" />
            ) : (
              <PiEyeLight size={16} color="#407BFF" />
            )}{' '}
          </ButtonPassword>
        </Label>
        <Button type="submit">Sing Up</Button>
        <LinkTo to="/signin">Sing in</LinkTo>
      </Form>
      <ImgWrapp>
        <ImgBottle src={bottle} alt="bottle" />
      </ImgWrapp>
    </LoginContainer>
  );
};

export default Registration;
