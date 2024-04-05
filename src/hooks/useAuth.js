import { useSelector } from 'react-redux';

import {
  selectUser,
  selectIsAuthenticated,
  selectIsRefreshing,
  selectIsLoggedIn,
  selectIsLoading,
} from '../redux/auth/selectors.js';

const useAuth = () => {
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);

  return {
    isLoggedIn,
    isAuthenticated,
    isRefreshing,
    user,
    isLoading,
  };
};

export default useAuth;
