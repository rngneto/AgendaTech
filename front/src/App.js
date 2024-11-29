import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './Navbar';

function App() {
  useEffect(() => {
    // Fazendo uma requisição GET para testar a comunicação com o backend
    axios.get('http://127.0.0.1:8000/api/teste/')
      .then((response) => {
        console.log('Resposta do backend:', response.data);
      })
      .catch((error) => {
        console.error('Erro ao se comunicar com o backend:', error);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Front-End da Agenda Tech</h1>
      </header>
    </div>
  );
}

export default App;
