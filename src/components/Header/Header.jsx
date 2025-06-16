import './Header.css';

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-title">
          <img src="assets/logo_my_big.png" alt="" />
          <h1>Lucie Vadkerti</h1>
        </div>
        <nav className="header-nav">
          <a className="nav-link" href="index.html">
            About
          </a>
          <a className="nav-link" href="O_projektu.html">
            Projects
          </a>
          <a className="nav-link" href="Technologie.html">
            Contacts
          </a>
        </nav>
      </header>
    </>
  );
};
