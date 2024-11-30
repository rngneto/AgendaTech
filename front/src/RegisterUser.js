import React, { useState } from 'react';
import './RegisterUser.css';

function RegisterUser() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    senha: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://127.0.0.1:8000/api/cadastrar_usuario/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        setMessage('Usuário cadastrado com sucesso no backend!');
      } else {
        setMessage(`Erro: ${data.erro}`);
      }
    } catch (error) {
      setMessage('Erro ao conectar ao backend.');
    }
  
    setFormData({ nome: '', sobrenome: '', senha: '' }); // Limpa o formulário
  };
  

  return (
    <div className="register-container">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sobrenome">Sobrenome:</label>
          <input
            type="text"
            id="sobrenome"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
}

export default RegisterUser;
