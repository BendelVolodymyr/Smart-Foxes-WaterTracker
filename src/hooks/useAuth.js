import { useSelector } from 'react-redux';

import {
  selectUser,
  selectIsAuthenticated,
  selectIsRefreshing,
  selectIsLoggedIn,
} from '../redux/auth/selectors.js';

const useAuth = () => {
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return {
    isLoggedIn,
    isAuthenticated,
    isRefreshing,
    user,
  };
};

export default useAuth;
