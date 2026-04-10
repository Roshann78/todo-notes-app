import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Styling function for NavLink to visually highlight the active page
  const navLinkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? '#10b981' : '#475569',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    backgroundColor: isActive ? '#ecfdf5' : 'transparent',
    transition: 'all 0.2s',
  });

  return (
    <>
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1rem 2rem', 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #e2e8f0',
        position: 'relative'
      }}>
        {/* Logo */}
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981', letterSpacing: '-0.5px' }}>
          NoteTask
        </div>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <div 
          className="hamburger-menu" 
          onClick={toggleMenu}
          style={{ cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px' }}
        >
          <span style={{ display: 'block', width: '25px', height: '3px', backgroundColor: '#334155', borderRadius: '2px' }}></span>
          <span style={{ display: 'block', width: '25px', height: '3px', backgroundColor: '#334155', borderRadius: '2px' }}></span>
          <span style={{ display: 'block', width: '25px', height: '3px', backgroundColor: '#334155', borderRadius: '2px' }}></span>
        </div>

        {/* Navigation Links */}
        <div 
          className={`nav-menu ${isOpen ? 'open' : ''}`}
          style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
        >
          <NavLink to="/" style={navLinkStyle} onClick={() => setIsOpen(false)}>Notes</NavLink>
          <NavLink to="/tasks" style={navLinkStyle} onClick={() => setIsOpen(false)}>Tasks</NavLink>
        </div>
      </nav>

      {/* Internal CSS for Media Queries */}
      <style>{`
        @media (max-width: 768px) {
          .hamburger-menu {
            display: flex !important;
          }
          .nav-menu {
            display: none !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #ffffff;
            border-bottom: 1px solid #e2e8f0;
            padding: 1rem 0;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
            z-index: 50;
          }
          .nav-menu.open {
            display: flex !important;
          }
          .nav-menu a {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
