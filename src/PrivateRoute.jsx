import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isRefreshing, isLogIn } = useAuth();
  const shouldRedirect = !isRefreshing && !isLogIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
