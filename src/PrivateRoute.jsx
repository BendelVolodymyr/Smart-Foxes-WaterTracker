import { Navigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoading, isLoggedIn } = useAuth();
  const shouldRedirect = !isLoading && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
