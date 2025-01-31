// src/components/Header.js
import 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À propos</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;