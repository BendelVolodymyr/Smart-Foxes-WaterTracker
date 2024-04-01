import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppNav } from '../AppNav/AppNav';
import { Footer } from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <AppNav />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer/>
    </>
  );
};

export default SharedLayout;
