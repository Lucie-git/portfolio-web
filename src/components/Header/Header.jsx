import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  console.log(menuOpened);

  const handleLogoClick = () => {
    setMenuOpened(false);
    window.location.href = '/';
  };

  return (
    <>
      <header className="header">
        <img src="assets/logo_my_small.png" alt="Osobní logo" onClick={handleLogoClick} />
        <button className="hamburger" onClick={() => setMenuOpened(!menuOpened)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        {menuOpened && (
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
        )}
      </header>
    </>
  );
};
