import LoginPage from '../../pages/LoginPage/LoginPage';
import { AuthNav } from '../AuthNav/AuthNav';
import { NotAuthNav } from '../NotAuthNav/NotAuthNav';

export const AppNav = () => {
  const isLogIn = false;
  //   const { isLogIn } = useAuth();

  return (
    <>
      <LoginPage />
      {isLogIn ? <AuthNav /> : <NotAuthNav />}
    </>
  );
};
