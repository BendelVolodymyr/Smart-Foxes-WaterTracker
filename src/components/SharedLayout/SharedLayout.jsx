import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppNav } from '../AppNav/AppNav';
import Header from '../Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <AppNav />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
