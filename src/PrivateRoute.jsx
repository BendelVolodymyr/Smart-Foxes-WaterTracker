import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoading, isLogIn } = useAuth();
  const shouldRedirect = !isLoading && !isLogIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
