import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  console.log(menuOpened);

  const handleClick = () => {
    console.log('Tlačítko funguje');
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <header className="header">
        <img src="assets/logo_my_big.png" alt="Osobní logo" />
        <button onClick={handleClick}>klik</button>
        <div className="hamburger">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
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
      </header>
    </>
  );
};
