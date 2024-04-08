
import useAuth from "../../../hooks/useAuth";
import { Container, Link, MOdalContainer, Span, Title } from "./ModalUser.styled";


const ModalUser = () => {
 const {user,isLoggedIn } = useAuth();
    const email = user.email;

  return isLoggedIn ? (
    <Container>
      <MOdalContainer>
          <Title>
      Welcome to Tracker Of Water</Title>
      <Span>{email}</Span>
    <Link href="#">Home</Link>  
      </MOdalContainer>
  </Container>
  ) : (<>
  </>)
}

export default ModalUser
