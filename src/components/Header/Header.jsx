import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-title">
          <img src="assets/logo_my_big.png" alt="" />
          <h1>Lucie Vadkerti</h1>
        </div>
        <nav className="header-nav">
          <Link to={'/about'} className="nav-link">
            About
          </Link>
          <Link to={'/projects'} className="nav-link">
            Projects
          </Link>
          <Link to={'/contacts'} className="nav-link">
            Contacts
          </Link>
        </nav>
      </header>
    </>
  );
};
