import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="navbar">
        <div className="brand">NoteTask</div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Notes</NavLink>
          <NavLink to="/tasks" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Tasks</NavLink>
        </div>
      </nav>
      <style>{`
        .hamburger-menu { display: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 4px; }
        .bar { display: block; width: 24px; height: 3px; background-color: var(--text-main); border-radius: 3px; transition: var(--transition); }
        @media (max-width: 768px) {
          .navbar { padding: 1.25rem 2rem; }
          .hamburger-menu { display: flex; }
          .nav-menu {
            display: none; flex-direction: column; position: absolute; top: 100%; left: 0; width: 100%;
            background-color: var(--surface-color); border-bottom: 1px solid var(--border-color);
            padding: 1rem 0; box-shadow: var(--shadow-md); z-index: 50; gap: 0;
          }
          .nav-menu.open { display: flex; }
          .nav-link { border-radius: 0; padding: 1rem 2rem; text-align: center; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
