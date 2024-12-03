import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Eventos from './Eventos';
import RegisterUser from './RegisterUser';
import UserList from './UserList'; 
import About from './About';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';
import CreateEvent from './CreateEvent';
import DetalhesEvento from './DetalhesEvento';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const handleLogout = () => {
    setUsuarioLogado(null); // Limpa o estado ao deslogar
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          usuarioLogado={usuarioLogado}
          setUsuarioLogado={setUsuarioLogado}
          handleLogout={handleLogout}
        />
        
        {/* Define as rotas */}
        <Routes>
          {/* Página inicial mostrando eventos */}
          <Route path="/" element={<Eventos />} />
          {/* Página de cadastro de eventos */}
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/eventos/:id" element={<DetalhesEvento />} />
          {/* Página de cadastro de usuários */}
          <Route path="/register" element={<RegisterUser setUsuarioLogado={setUsuarioLogado} />} />
          {/* Página de usuários */}
          <Route path="/usuarios" element={<UserList />} />
          {/* Página de informaçãoes dos desenvolvedores */}
          <Route path="/about" element={<About />} />
        </Routes>
        
        {/* Componente Footer que será exibido em todas as páginas */}
        <Footer />
        <ThemeToggle />
      </div>
    </Router>
  );
}

export default App;
