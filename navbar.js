// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import '../CSS/navbar.css';
import { useNavigate } from 'react-router-dom';

const CustomLink = ({ to, label }) => {
  return (
    <Link to={to} className="nav-link">
      {label}
    </Link>
  );
};

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="logo" onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>
        Application
      </div>
      <div className="mobile-menu-icon" onClick={handleToggleMobileMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li className="nav-item">
          <CustomLink to="/home" label="Home" />
        </li>
        <li className="nav-item">
          {isLoggedIn ? (
            <button className="nav-item" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <CustomLink to="/login" label="Login" />
          )}
        </li>
        <li className="nav-item">
          <CustomLink to="/register" label="Register" />
        </li>
        <li className="nav-item">
          <CustomLink to="/about" label="About" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
