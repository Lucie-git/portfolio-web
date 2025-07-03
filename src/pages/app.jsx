import './index.css';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';

export const App = () => {
  const location = useLocation();
  const isMain = location.pathname === '/';

  return (
    <>
      <Header />
      {isMain ? <Main /> : <Outlet />}
      <Footer />
    </>
  );
};
