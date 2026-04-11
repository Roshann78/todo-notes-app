import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { user, logout, loading } = useAuth();

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
        <div className="nav-user">
          {loading ? null : user ? (
            <div className="user-info">
              {user.profilePhoto && (
                <img src={user.profilePhoto} alt={user.name} className="user-avatar" referrerPolicy="no-referrer" />
              )}
              <span className="user-name">{user.name}</span>
              <button className="logout-btn" onClick={logout}>Sign Out</button>
            </div>
          ) : (
            <NavLink to="/login" className="nav-link login-link" onClick={() => setIsOpen(false)}>Sign In</NavLink>
          )}
        </div>
      </nav>
      <style>{`
        .hamburger-menu { display: none; cursor: pointer; flex-direction: column; gap: 5px; padding: 4px; }
        .bar { display: block; width: 24px; height: 3px; background-color: var(--text-main); border-radius: 3px; transition: var(--transition); }
        .nav-user { display: flex; align-items: center; }
        .user-info { display: flex; align-items: center; gap: 0.75rem; }
        .user-avatar { width: 32px; height: 32px; border-radius: 50%; object-fit: cover; border: 2px solid var(--accent-color); }
        .user-name { color: var(--text-main); font-size: 0.9rem; font-weight: 500; }
        .logout-btn {
          background: rgba(255, 80, 80, 0.15); color: #ff6b6b; border: 1px solid rgba(255, 80, 80, 0.3);
          padding: 0.4rem 0.9rem; border-radius: 8px; cursor: pointer; font-size: 0.8rem; font-weight: 500;
          transition: var(--transition);
        }
        .logout-btn:hover { background: rgba(255, 80, 80, 0.3); }
        .login-link { font-weight: 600; }
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
          .nav-user { margin-left: 0; }
          .user-name { display: none; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
