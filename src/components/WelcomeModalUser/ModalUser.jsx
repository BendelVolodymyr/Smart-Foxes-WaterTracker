import { ModalContext } from '../../context/ModalContext/ModalContext';
import { useContext } from 'react';
import { Button, Container, MOdalContainer, Span, Title } from './ModalUser.styled';
import useAuth from '../../hooks/useAuth';

const ModalUser = () => {
  const { user, isLoggedIn } = useAuth();
  const email = user.email;
  const { closeModal } = useContext(ModalContext);

  return !isLoggedIn ? (
    <Container>
      <MOdalContainer>
        <Title>Oops, something went wrong</Title>
        <Button type="button" onClick={closeModal}>
          Close
        </Button>
      </MOdalContainer>
    </Container>
  ) : (
    <Container>
      <MOdalContainer>
        <Title>Welcome to Tracker Of Water</Title>
        <Span>{email}</Span>
        <Button type="button" onClick={closeModal}>
          Home
        </Button>
      </MOdalContainer>
    </Container>
  );
};

export default ModalUser;
