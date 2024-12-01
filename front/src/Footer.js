import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const location = useLocation(); // Obtém a URL atual

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <Link 
              to="/" 
              className="nav-link px-2 text-body-secondary" 
              onClick={scrollToTop}
            >
              Home
            </Link>
          </li>
          {/* Verifica se a página atual não é "About" antes de exibir o link */}
          {location.pathname !== '/about' && (
            <li className="nav-item">
              <Link 
                to="/about" 
                className="nav-link px-2 text-body-secondary"
              >
                About
              </Link>
            </li>
          )}
        </ul>
        <p className="text-center text-body-secondary">&copy; 2024 - Engenharia de Software II</p>
      </footer>
    </div>
  );
}

export default Footer;
