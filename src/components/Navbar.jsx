function Navbar({ activePage, setActivePage }) {
  const navItems = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

  const handleNavClick = (page) => {
    setActivePage(page.toLowerCase());
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li className="navbar-item" key={item}>
            <button
              className={`navbar-link ${activePage === item.toLowerCase() ? 'active' : ''}`}
              data-nav-link
              onClick={() => handleNavClick(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
