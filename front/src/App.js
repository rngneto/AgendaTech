import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import RegisterUser from './RegisterUser';
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
        <Routes>
          <Route 
            path="/register" 
            element={<RegisterUser setUsuarioLogado={setUsuarioLogado} />} 
          />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
