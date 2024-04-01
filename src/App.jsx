import { Route, Routes } from 'react-router-dom';
import { lazy, useState } from 'react';
import { RestrictedRoute } from './RestrictedRoute';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomeWaterPage from './pages/HomeWaterPage';
import { Main } from './components/Main/Main';

const HomeNotAuthPage = lazy(() => import('./pages/HomeNotAuth'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));
const Registration = lazy(() => import('./pages/Registration'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  // УСЕ ЩО ЗАКОМЕНТОВАНО ДОДАМ ПІСЛЯ НАЛАШТУВАННЯ REDUX
  // const { isRefreshing } = useAuth();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  // isRefreshing ? 'spiner' : усе що знизу

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomeNotAuthPage />} />
        <Route path="/welcome" element={<Main />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/Smart-Foxes-WaterTracker/home"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/registration"
          element={
            <RestrictedRoute redirectTo="/home" component={<Registration />} />
          }
        />
        <Route
          path="/home"
          element={
            <RestrictedRoute redirectTo="/" component={<HomeWaterPage />} />
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default App;
