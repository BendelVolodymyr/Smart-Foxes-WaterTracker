import { useSelector } from 'react-redux';

import {
  selectUser,
  selectIsAuthenticated,
  selectIsRefreshing,
  selectIsLoggedIn,
  selectIsLoading,
  secectcreatedAt,
  selectAvatar,
} from '../redux/auth/selectors.js';

const useAuth = () => {
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const createdAt = useSelector(secectcreatedAt);
  const avatarURL = useSelector(selectAvatar);

  return {
    isLoggedIn,
    isAuthenticated,
    isRefreshing,
    user,
    isLoading,
    createdAt,
    avatarURL,
  };
};

export default useAuth;
