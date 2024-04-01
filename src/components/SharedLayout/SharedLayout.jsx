import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppNav } from '../AppNav/AppNav';
import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';

const SharedLayout = () => {
  return (
    <>
      <AppNav />
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
