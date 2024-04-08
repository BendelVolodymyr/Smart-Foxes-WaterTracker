import { useSelector } from 'react-redux';

import {
  selectUser,
  selectIsAuthenticated,
  selectIsRefreshing,
  selectIsLoggedIn,
  selectIsLoading,
  secectcreatedAt,
} from '../redux/auth/selectors.js';

const useAuth = () => {
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const createdAt = useSelector(secectcreatedAt);

  return {
    isLoggedIn,
    isAuthenticated,
    isRefreshing,
    user,
    isLoading,
    createdAt,
  };
};

export default useAuth;
