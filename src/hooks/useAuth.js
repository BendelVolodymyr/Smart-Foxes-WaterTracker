import { useSelector } from 'react-redux';

import {
  selectUser,
  selectIsAuthenticated,
  selectIsRefreshing,
  selectIsLoggedIn,
  selectIsLoading,
  secectcreatedAt,
  selectAvatar,
  selectToken,
} from '../redux/auth/selectors.js';

const useAuth = () => {
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const createdAt = useSelector(secectcreatedAt);
  const avatarURL = useSelector(selectAvatar);
  const token = useSelector(selectToken);

  return {
    isLoggedIn,
    isAuthenticated,
    isRefreshing,
    user,
    isLoading,
    createdAt,
    avatarURL,
    token,
  };
};

export default useAuth;
