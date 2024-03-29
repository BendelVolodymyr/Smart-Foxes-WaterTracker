// import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogIn = false; // тимчасово
  // const { isLogIn } = useAuth();
  return isLogIn ? <Navigate to={redirectTo} /> : Component;
};
