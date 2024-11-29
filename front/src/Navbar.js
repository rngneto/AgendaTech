import React from 'react';
import './Navbar.css';
import agendaIcon from './assets/agenda.png';
import userIcon from './assets/user-icon.png';
import searchIcon from './assets/lupa.png';
import locationIcon from './assets/location-icon.png';
import settingsIcon from './assets/settings.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={agendaIcon} alt="Agenda" id="agenda-icon" />
        {/* Barra de Pesquisa */}
        <div className="search-bar">
          <div className="search-icon">
            <img src={searchIcon} alt="Lupa" />
          </div>
          <input type="text" id="search-input" placeholder="Buscar eventos" />
          <button id="search-button" className="search-button">Procurar</button>
        </div>
      </div>

      <div className="navbar-center">
        <a href="#!" onClick={() => alert('CRIE SEU EVENTO')}>CRIE SEU EVENTO</a>
        <a href="#!" onClick={() => alert('MEUS EVENTOS')}>MEUS EVENTOS</a>
        <a href="#!" onClick={() => alert('PERFIL')}>PERFIL</a>
        <a href="#!" onClick={() => alert('Configurações')}>
          <img src={settingsIcon} alt="Configurações" className="settings-icon" />
        </a>
      </div>

      <div className="navbar-right">
        <img src={userIcon} alt="Usuário" id="user-icon" onClick={() => alert('Opções de Usuário')} />
      </div>
    </div>
  );
}

export default Navbar;
