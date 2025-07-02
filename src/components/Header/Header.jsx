import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  console.log(menuOpened);

  return (
    <>
      <header className="header">
        <img src="assets/logo_my_big.png" alt="Osobní logo" />
        <div
          tabIndex={0}
          className="hamburger"
          onClick={() => {
            setMenuOpened(!menuOpened);
            console.log('funguju');
          }}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {menuOpened && (
          <nav className="header-nav">
            <ul>
              <Link to={'/about'} className="nav-link">
                About
              </Link>
              <Link to={'/projects'} className="nav-link">
                Projects
              </Link>
              <Link to={'/contacts'} className="nav-link">
                Contacts
              </Link>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};
