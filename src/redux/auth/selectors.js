export const selectUser = state => state.auth.user;

export const selectIsAuthenticated = state => state.auth.isAuthenticated;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsLoading = state => state.auth.isLoading;
export const secectcreatedAt = state => state.auth.user.createdAt;
export const selectAvatar = state => state.auth.avatarURL;
export const selectToken = state => state.auth.token;
