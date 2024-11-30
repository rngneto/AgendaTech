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

  return (
    <div className="navbar">
      {/* Logo e Barra de Pesquisa */}
      <div className="navbar-left">
        <Link to="/">
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

      {/* Link principal no centro */}
      <div className="navbar-center">
        <a href="#!" onClick={() => alert('CRIE SEU EVENTO')}>CRIE SEU EVENTO</a>
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
              <a href="#!" onClick={() => alert('Meus Eventos')}>Meus Eventos</a>
              <a href="#!" onClick={() => alert('Minha Conta')}>Minha Conta</a>
              <a href="#!" onClick={handleLogout}>Sair</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
