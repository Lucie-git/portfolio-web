import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [desktop, setDesktop] = useState(window.innerWidth >= 751);

  useEffect(() => {
    window.addEventListener('resize', () => {
      console.log(window.innerWidth);
      if (window.innerWidth >= 751) setDesktop(true);
      else {
        setDesktop(false);
      }
    });
  }, []);

  console.log('Window width:', window.innerWidth);
  console.log('Is desktop:', desktop);

  const handleLogoClick = () => {
    window.location.href = '/';
    setMenuOpened(false);
  };

  useEffect(() => {
    setMenuOpened(false);
  }, [location.pathname]);

  return (
    <>
      <header className="header">
        <img src="assets/logo_my_small.png" alt="Osobní logo" onClick={handleLogoClick} />
        <button className="hamburger" onClick={() => setMenuOpened(!menuOpened)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        {menuOpened || desktop ? (
          <nav className="header-nav">
            <ul>
              <li>
                <Link to={'/about'} className="nav-link">
                  About
                </Link>
              </li>

              <li>
                <Link to={'/projects'} className="nav-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to={'/contacts'} className="nav-link">
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>
    </>
  );
};
