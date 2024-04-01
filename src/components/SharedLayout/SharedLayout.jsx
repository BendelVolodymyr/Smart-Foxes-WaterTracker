import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppNav } from '../AppNav/AppNav';

import Header from '../Header/Header';

import { Footer } from '../Footer/Footer';
// 382ce7f6cc54f25cdce456d3ca7c10b1f211379d

const SharedLayout = () => {
  return (
    <>
      <Header />
      <AppNav />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
