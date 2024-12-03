import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import agendaIcon from './assets/agenda.png';
import userIcon from './assets/user-icon.png';
import searchIcon from './assets/lupa.png';

function Navbar({ usuarioLogado, setUsuarioLogado, handleLogout }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleUserMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="navbar">
      {/* Logo e Barra de Pesquisa */}
      <div className="navbar-left">
        <Link to="/" onClick={scrollToTop}>
          <img src={agendaIcon} alt="Agenda" id="agenda-icon" />
        </Link>
        <div className="search-bar">
          <div className="search-icon">
            <img src={searchIcon} alt="Lupa" />
          </div>
          <input type="text" id="search-input" placeholder="Buscar eventos" />
          <button id="search-button" className="search-button">Procurar</button>
        </div>
      </div>

      {/* Links principais no centro */}
      <div className="navbar-center">
        <Link to="/create-event" className="nav-link">Criar Evento</Link>       
      </div>

      {/* Área de usuário */}
      <div className="navbar-right">
        {!usuarioLogado ? (
          <button 
            className="register-btn" 
            onClick={() => window.location.href = '/register'}
          >
            Cadastre-se
          </button>
        ) : (
          <div className="user-area">
            <img 
              src={userIcon} 
              alt="Usuário" 
              id="user-icon" 
              onClick={toggleUserMenu} 
            />
            <div className={`user-menu ${menuVisible ? '' : 'hidden'}`}>
              <Link to="/meus-eventos" className="menu-link">Meus Eventos</Link>
              <Link to="/minha-conta" className="menu-link">Minha Conta</Link>
              <a href="#!" className="menu-link" onClick={handleLogout}>Sair</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
