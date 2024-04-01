import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { RestrictedRoute } from './RestrictedRoute';

import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomeWaterPage from './pages/HomeWaterPage';
import { Loader } from './components/Loader/Loader.jsx';
// const Loader = lazy(() => import('./components/Loader/Loader.jsx'));
const Main = lazy(() => import('./pages/Main/Main.jsx'));
const HomeNotAuthPage = lazy(() => import('./pages/HomeNotAuth'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.jsx'));
const Registration = lazy(() => import('./pages/RegistrationPage.jsx'));
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
    <Suspense fallback={<Loader />}>
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
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
export default App;
