
import { useContext } from "react";
import useAuth from "../../../hooks/useAuth";
import { Button, Container, MOdalContainer, Span, Title } from "./ModalUser.styled";
import { ModalContext } from "../../../context";


const ModalUser = () => {
 const {user,isLoggedIn} = useAuth();
 const { closeModal } = useContext(ModalContext);
    const email = user.email;

  return !isLoggedIn ? (
    <Container>
      <MOdalContainer>
          <Title>Oops, something went wrong</Title>
          <Button type="button" onClick={closeModal}>Close</Button>  
      </MOdalContainer>
  </Container>
  ) : (
    <Container>
      <MOdalContainer>
          <Title>
      Welcome to Tracker Of Water</Title>
      <Span>{email}</Span>
    <Button type="button" onClick={closeModal}>Home</Button>  
      </MOdalContainer>
  </Container>
  ) 
}

export default ModalUser
