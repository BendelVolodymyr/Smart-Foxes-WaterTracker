import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute.jsx';
import { useDispatch } from 'react-redux';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Loader } from './components/Loader/Loader.jsx';
import { refreshUser } from './redux/auth/operations.js';
import useAuth from './hooks/useAuth.js';
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx';
import RefreshPassword from './components/ForgotPassword/RefreshPassword.jsx';
// const Loader = lazy(() => import('./components/Loader/Loader.jsx'));

const Main = lazy(() => import('./pages/Main/Main.jsx'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));
const Registration = lazy(() => import('./pages/SingUp/RegistrationPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const HomeWaterPage = lazy(() => import('./pages/HomeWaterPage.jsx'));

function App() {
  const dispatch = useDispatch();
  const { isLoading, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isLoading ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/welcome" />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/home" component={<LoginPage />} />
            }
          />

          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route
            path="/forgotPassword/:userId/:temporaryId"
            element={<RefreshPassword />}
          />

          <Route
            path="/signup"
            element={
              <RestrictedRoute
                redirectTo="/home"
                component={<Registration />}
              />
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute
                redirectTo="/signin"
                component={<HomeWaterPage />}
              />
            }
          />
          <Route
            path="/welcome"
            element={
              <RestrictedRoute redirectTo="/home" component={<Main />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
