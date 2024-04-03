import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch } from 'react-redux';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Loader } from './components/Loader/Loader.jsx';
import { refreshUser } from './redux/auth/operations.js';
// const Loader = lazy(() => import('./components/Loader/Loader.jsx'));

const Main = lazy(() => import('./pages/Main/Main.jsx'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));
const Registration = lazy(() => import('./pages/RegistrationPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const HomeWaterPage = lazy(() => import('./pages/HomeWaterPage.jsx'));

function App() {
  const dispatch = useDispatch();
  const [test, setTest] = useState(true);
  // УСЕ ЩО ЗАКОМЕНТОВАНО ДОДАМ ПІСЛЯ НАЛАШТУВАННЯ REDUX
  // const { isRefreshing } = useAuth();
  // const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // isRefreshing ? 'spiner' : усе що знизу
  // <Route index element={isAuth ? <HomeWaterPage /> : <Main />} />  це буде при авторизації
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              test ? <Navigate to="/welcome" /> : <Navigate to="/home" />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute redirectTo="/home" component={<LoginPage />} />
            }
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
              <RestrictedRoute redirectTo="/" component={<HomeWaterPage />} />
            }
          />
          <Route
            path="/welcome"
            element={
              <RestrictedRoute redirectTo="/home" component={<Main />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
export default App;
